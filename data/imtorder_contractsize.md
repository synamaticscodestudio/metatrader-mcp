# ContractSize (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Orders ](trading_order.md "Orders") / [ IMTOrder ](imtorder.md "IMTOrder")/ ContractSize | [](imtorder_digitscurrency.md "DigitsCurrency") [](imtorder_state.md "State") |
| --- | --- | --- |
| --- | --- |

IMTOrder::ContractSize
Get the contract size of the symbol, for which an order was placed.
C++
double IMTOrder::ContractSize() const  
---  
.NET (Gateway/Manager API)
double CIMTOrder.ContractSize()  
---  
Python
MTOrder.ContractSize  
---  
Return Value
The contract size of the symbol, for which an order was placed.
IMTOrder::ContractSize
Set the contract size of the symbol, for which an order was placed.
C++
MTAPIRES IMTOrder::ContractSize( const double contract_size // Contract size )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTOrder.ContractSize( double contract_size // Contract size )  
---  
Python
MTOrder.ContractSize  
---  
Parameters
contract_size
[in] The contract size of the symbol, for which an order was placed.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.