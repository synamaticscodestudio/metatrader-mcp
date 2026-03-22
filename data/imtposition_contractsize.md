# ContractSize (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Positions ](trading_position.md "Positions") / [ IMTPosition ](imtposition.md "IMTPosition")/ ContractSize | [](imtposition_digitscurrency.md "DigitsCurrency") [](imtposition_position.md "Position") |
| --- | --- | --- |
| --- | --- |

IMTPosition::ContractSize
Get the contract size of the symbol, for which a position is opened.
C++
double IMTPosition::ContractSize() const  
---  
.NET (Gateway/Manager API)
double CIMTPosition.ContractSize()  
---  
Return Value
The contract size of the symbol, for which a position is opened.
IMTPosition::ContractSize
Set the contract size of the symbol, for which a position is opened.
C++
MTAPIRES IMTPosition::ContractSize( const double contract_size // Contract size )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTPosition.ContractSize( double contract_size // Contract size )  
---  
Parameters
contract_size
[in] The contract size of the symbol, for which a position is opened.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.