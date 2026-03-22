# FaceValue (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Symbols ](config_symbol.md "Symbols") / [ IMTConSymbol ](imtconsymbol.md "IMTConSymbol")/ FaceValue | [](imtconsymbol_orderflags.md "OrderFlags") [](imtconsymbol_accruedinterest.md "AccruedInterest") |
| --- | --- | --- |
| --- | --- |

IMTConSymbol::FaceValue
Get the face value of a bond.
C++
double IMTConSymbol::FaceValue() const  
---  
.NET (Gateway/Manager API)
double CIMTConSymbol.FaceValue()  
---  
Python (Manager API)
MTConSymbol.FaceValue  
---  
Return Value
The face value of a bond.
IMTConSymbol::FaceValue
Set the face value of a bond.
C++
MTAPIRES IMTConSymbol::FaceValue( const double value // Face value )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConSymbol.FaceValue( double value // Face value )  
---  
Python (Manager API)
MTConSymbol.FaceValue  
---  
Parameters
value
[in] The face value of a bond.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.