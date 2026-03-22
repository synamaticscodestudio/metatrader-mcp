# OnServerLog (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Interface of Server Events ](imtserversink.md "Interface of Server Events")/ OnServerLog | [](imtserversink.md "Interface of Server Events") [](imtcustomsink.md "Custom Events Interface") |
| --- | --- | --- |
| --- | --- |

IMTServerSink::OnServerLog
A handler of the event of adding a record to the server journal.
virtual void IMTServerSink::OnServerLog( const int code, // Message type const UINT type, // Event type const INT64 datetime, // Message time LPCWSTR source, // Message source LPCWSTR message // Message text )  
---  
Parameters
code
[in] Log [message type](journal.htm#enmtlogcode).
type
[in] [Event type](journal.htm#enmtlogtype).
datetime
[in] Message time in milliseconds passed since 01.01.1970.
source
[in] Message source.
message
[in] Message text. The string contains only the massage text without time and type.
Note
This method is called by the Server API to notify that a new record has been added to the server journal.
It is not guaranteed that the sequence of calls of this event complies with the sequence of writing the corresponding messages to the journal. To get the accurate sequence, one should analyze datetime parameter.