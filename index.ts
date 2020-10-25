import IORedis, {Redis} from "ioredis";

let client: Redis

const getClient = () => {
  client ??= new IORedis()
  return client
}

export default getClient
