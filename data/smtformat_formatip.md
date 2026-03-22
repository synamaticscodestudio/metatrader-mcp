# FormatIP (MetaTrader5SDK)

|  | [ Tools ](reference_tools.md "Tools") / [ SMTFormat ](smtformat.md "SMTFormat")/ FormatIP | [](smtformat_formattimemsc.md "FormatTimeMsc") [](smtformat_formatpositiontype.md "FormatPositionType") |
| --- | --- | --- |
| --- | --- |

SMTFormat::FormatIP
Format an IP address (IPv4) and a port to a string.
static LPCWSTR SMTFormat::FormatIP( CMTStr &str, // Reference to a string object const UINT ip, // IP address const UINT port=0 // Port )  
---  
Parameters
&str
[out] Reference to the string object [CMTStr](cmtstr.md "CMTStr"), into which information is placed.
ip
[in] IP address (IPv4) in the form of a UINT number.
port=0
[in] Port number. This parameter is optional.
Return Value
Returns a constant pointer to a string in the str object.
SMTFormat::FormatIP
Format an IP address (IPv6) and a port to a string.
static LPCWSTR SMTFormat::FormatIP( CMTStr &str, // Reference to a string object const USHORT *ip, // IP address const UINT port=0 // Port )  
---  
Parameters
&str
[out] Reference to the string object [CMTStr](cmtstr.md "CMTStr"), into which information is placed.
ip
[in] A pointer to the IP address (IPv6) in the form of a USHORT number.
port=0
[in] Port number. This parameter is optional.
Return Value
Returns a constant pointer to a string in the str object.