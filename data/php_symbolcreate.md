# SymbolCreate (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ PHP Implementation of Protocol ](php.md "Protocol Implementation in PHP") / [ MTWebAPI Class ](mtwebapi.md "MTWebAPI Class") / [ Symbols ](php_symbol.md "Symbols")/ SymbolCreate | [](php_symbol.md "Symbols") [](php_symboladd.md "SymbolAdd") |
| --- | --- | --- |
| --- | --- |

MTWebAPI::SymbolCreate
Create an object of a symbol.
MTUser MTWebAPI::SymbolCreate()  
---  
Return Value
It returns a pointer to the created MTConSymbol object used to describe the symbol. The symbol parameters are described in the ["Data Structure"](webapi_symbol_data_structure.md "Data Structure").
Note
This method creates an MTConSymbol object completely filled with default symbol parameters.