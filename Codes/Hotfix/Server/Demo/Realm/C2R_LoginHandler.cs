using System;
using System.Net;


namespace ET.Server
{
	[MessageHandler(SceneType.Realm)]
	public class C2R_LoginHandler : AMRpcHandler<C2R_Login, R2C_Login>
	{
		protected override async ETTask Run(Session session, C2R_Login request, R2C_Login response, Action reply)
		{
			var db = DBManagerComponent.Instance.GetZoneDB(session.DomainZone());
			var col = await db.Query<AccountComponent>(account => account.Account == request.Account && account.Password == request.Password);
			if (col.Count <= 0)
			{
				Log.Info("--------------------------------登录失败");
				response.Error = ErrorCode.ERR_LoginFailed;
				reply();
				return;
			}

			// 随机分配一个Gate
			StartSceneConfig config = RealmGateAddressHelper.GetGate(session.DomainZone());
			Log.Debug($"gate address: {MongoHelper.ToJson(config)}");
			
			// 向gate请求一个key,客户端可以拿着这个key连接gate
			G2R_GetLoginKey g2RGetLoginKey = (G2R_GetLoginKey) await ActorMessageSenderComponent.Instance.Call(
				config.InstanceId, new R2G_GetLoginKey() {Account = request.Account});

			response.Address = config.InnerIPOutPort.ToString();
			response.Key = g2RGetLoginKey.Key;
			response.GateId = g2RGetLoginKey.GateId;
			reply();
		}
	}
}
