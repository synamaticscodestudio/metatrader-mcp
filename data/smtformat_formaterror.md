# FormatError (MetaTrader5SDK)

|  | [ Tools ](reference_tools.md "Tools") / [ SMTFormat ](smtformat.md "SMTFormat")/ FormatError | [](smtformat_enum.md "Enumerations") [](smtformat_formatdouble.md "FormatDouble") |
| --- | --- | --- |
| --- | --- |

SMTFormat::FormatError
Convert [an error code](reference_retcodes.md "Return Codes") used in the MetaTrader 5 platform into a text description.
static LPCWSTR SMTFormat::FormatError( const MTAPIRES retcode // Error code )  
---  
Parameters
retcode
[in] Error code.
Return Value
Returns a constant pointer to a string with the text description.