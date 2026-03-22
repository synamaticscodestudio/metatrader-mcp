# ExpertID (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Deals ](trading_deal.md "Deals") / [ IMTDeal ](imtdeal.md "IMTDeal")/ ExpertID | [](imtdeal_ratemargin.md "RateMargin") [](imtdeal_partyid.md "PartyID") |
| --- | --- | --- |
| --- | --- |

IMTDeal::ExpertID
Get the ID of the Expert Advisor that has executed a deal.
C++
UINT64 IMTDeal::ExpertID() const  
---  
.NET (Gateway/Manager API)
ulong CIMTDeal.ExpertID()  
---  
Python
MTDeal.ExpertID  
---  
Return Value
The ID of the Expert Advisor that has executed a deal. If a deals has been set manually, 0 is returned.
Note
This identifier is set by the Expert Advisor.
IMTDeal::ExpertID
Set the ID of the Expert Advisor that has executed a deal.
C++
MTAPIRES IMTDeal::ExpertID( const UINT64 id // Expert Advisor ID )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTDeal.ExpertID( ulong id // Expert Advisor ID )  
---  
Python
MTDeal.ExpertID  
---  
Parameters
id
[in] The ID of the Expert Advisor that has executed a deal. The 0 value means that the deal was executed manually.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.