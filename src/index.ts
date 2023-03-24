import { ACCOUNT_1, ACCOUNT_2, INFURA_KEY } from "../config";
import { accounts } from "./01_accounts";
import { readFromSmartCotract } from "./02_read_smart_contract";
import { creatTransaction } from "./03_create_transaction";

accounts(ACCOUNT_1);
accounts(ACCOUNT_2);
// readFromSmartCotract();
// creatTransaction();
