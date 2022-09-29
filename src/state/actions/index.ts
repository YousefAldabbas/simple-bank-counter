import { ActionType } from "../action-types/index";

interface DepositAction {
  type: ActionType.DEPOSIT;
  payload: number;
}
interface WidthdrawAction {
  type: ActionType.WITHDRAW;
  payload: number;
}
interface BankruptAction {
  type: ActionType.BANKRUPT;
}

export type Action = DepositAction | WidthdrawAction | BankruptAction;
