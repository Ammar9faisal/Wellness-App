import { Client, Account, ID} from "appwrite";

const client = new Client();
client.setProject('67aab3000007ccf67076');

const account = new Account(client);

export { client, account, ID };