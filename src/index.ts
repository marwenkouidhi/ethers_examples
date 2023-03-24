import { ACCOUNT_1, ACCOUNT_2, INFURA_KEY } from "../config";
import { accounts } from "./01_log_account_balance";
import { readFromSmartCotract } from "./02_read_smart_contract";
import { sendETH } from "./03_send_ETH";
import { sendTokens } from "./04_send_ERC20_tokens";
import { listenToEvents } from "./05_events_listner";

// accounts(ACCOUNT_1);
// accounts(ACCOUNT_2);
// readFromSmartCotract();
// sendETH();
// sendTokens();
listenToEvents();
