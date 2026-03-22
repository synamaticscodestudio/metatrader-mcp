# ContractSize (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Deals ](trading_deal.md "Deals") / [ IMTDeal ](imtdeal.md "IMTDeal")/ ContractSize | [](imtdeal_digitscurrency.md "DigitsCurrency") [](imtdeal_time.md "Time") |
| --- | --- | --- |
| --- | --- |

IMTDeal::ContractSize
Get the contract size of the symbol, for which a deal was executed.
C++
double IMTDeal::ContractSize() const  
---  
.NET (Gateway/Manager API)
double CIMTDeal.ContractSize()  
---  
Python
MTDeal.ContractSize  
---  
Return Value
The contract size of the symbol, for which a deal was executed.
IMTDeal::ContractSize
Set the contract size of the symbol, for which a deal is executed.
C++
MTAPIRES IMTDeal::ContractSize( const double contract_size // Contract size )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTDeal.ContractSize( double contract_size // Contract size )  
---  
Python
MTDeal.ContractSize  
---  
Parameters
contract_size
[in] The contract size of the symbol, for which a deal was executed.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.