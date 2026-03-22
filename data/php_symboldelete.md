# SymbolDelete (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ PHP Implementation of Protocol ](php.md "Protocol Implementation in PHP") / [ MTWebAPI Class ](mtwebapi.md "MTWebAPI Class") / [ Symbols ](php_symbol.md "Symbols")/ SymbolDelete | [](php_symboladd.md "SymbolAdd") [](php_symboltotal.md "SymbolTotal") |
| --- | --- | --- |
| --- | --- |

MTWebAPI::SymbolDelete
Delete a symbol configuration with the specified name.
MTAPIRES MTWebAPI::SymbolDelete( string $name // Symbol name )  
---  
Parameters
$name
[in] The name of the symbol that you want to delete.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
  * This method works only when connected to the main trade server. Otherwise, error [MT_RET_ERR_NOTMAIN](retcodes_api.md "API") is returned.

  * [The manager account](webapi_rest_authentication.htm#client_start) must have rights to connect as an administrator and edit configurations of symbols. Otherwise, error code [MT_RET_ERR_PERMISSIONS](retcodes_common.md "Common errors") is returned.
  * If a symbol with the specified name is not found, the error code [MT_RET_NOTFOUND](retcodes_common.md "Common errors") is returned.
  * The string specifying the group name must be passed in the UTF-8 format.
