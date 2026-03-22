# FormatDealAction (MetaTrader5SDK)

|  | [ Tools ](reference_tools.md "Tools") / [ SMTFormat ](smtformat.md "SMTFormat")/ FormatDealAction | [](smtformat_formatorderprice.md "FormatOrderPrice") [](smtformat_formatdealentry.md "FormatDealEntry") |
| --- | --- | --- |
| --- | --- |

SMTFormat::FormatDealAction
Format the type of action performed by a deal to a string with a text description.
static LPCWSTR SMTFormat::FormatDealAction( CMTStr &str, // Reference to a string object const UINT action // Type of action )  
---  
Parameters
&str
[out] Reference to the string object [CMTStr](cmtstr.md "CMTStr"), into which information is placed.
action
[in] Type of action performed by a deal. Specified by a value of the [IMTDeal::EnDealAction](imtdeal_enum.htm#endealaction) enumeration:
  * IMTDeal::DEAL_BUY \- "buy";
  * IMTDeal::DEAL_SELL \- "sell";
  * IMTDeal::DEAL_BALANCE \- "balance";
  * IMTDeal::DEAL_CREDIT \- "credit";
  * IMTDeal::DEAL_CHARGE\- "charge";
  * IMTDeal::DEAL_CORRECTION \- "correction";
  * IMTDeal::DEAL_BONUS \- "bonus";
  * IMTDeal::DEAL_COMMISSION \- "commission";
  * IMTDeal::DEAL_COMMISSION_DAILY \- "daily commission";
  * IMTDeal::DEAL_COMMISSION_MONTHLY \- "monthly commission";
  * IMTDeal::DEAL_AGENT_DAILY \- "daily agent commission";
  * IMTDeal::DEAL_AGENT_MONTHLY \- "monthly agent commission";
  * IMTDeal::DEAL_INTERESTRATE \- "interest rate".

Return Value
Returns a constant pointer to a string in the str object.