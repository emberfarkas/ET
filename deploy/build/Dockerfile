FROM openjdk:8-slim AS builder

COPY ./server /src/app
WORKDIR /src/app

# build过程
# COPY .mvn/ .mvn
# COPY mvnw pom.xml ./
# RUN ./mvnw dependency:go-offline

# COPY src ./src

# CMD ["./mvnw", "spring-boot:run"]

FROM openjdk:8-slim

COPY --from=builder /src/app/factoryJob/target/factoryJob.jar /app/factoryJob.jar
COPY --from=builder /src/app/pairJob/target/pairJob.jar /app/factoryJob.jar

WORKDIR /app
VOLUME /opt/fswap/data
VOLUME /opt/fswap/logs

EXPOSE 8000
EXPOSE 9000
