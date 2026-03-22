# MTBook/MTBookDiff (MetaTrader5SDK)

|  | [ Structures ](reference_structures.md "Structures")/ MTBook/MTBookDiff | [](mtbookitem.md "MTBookItem") [](mtgatewayinfo.md "MTGatewayInfo") |
| --- | --- | --- |
| --- | --- |

MTBook/MTBookDiff
The MTBook and MTBookDiff structures are identical. The difference is that the former is used in the Server API and Manager API, and the latter is used in the Gateway API. The name emphasizes the fundamental difference in passing the Depth of Market data. In the Server API Manager API, the entire Depth of Market is passed each time, while in the Gateway API only changes are passed.  
---  
The MTBook/MTBookDiff structure describes changes of the [Depth of Market](reference_dom.md "Depth of Market"). The structure is defined with the one-byte alignment.
# pragma pack(push,1) struct MTBook { //--- Depth of market flags enum EnBookFlags { FLAG_PRE_AUCTION =1, // Pre-auction flag FLAG_SNAPSHOT =2, // Flag for internal use //--- Enumeration borders FLAG_NONE  =0 // No flags FLAG_ALL =FLAG_PRE_AUCTION // All flags }; wchar_t symbol[32]; // Symbol MTBookItem items[32*4]; // Change elements UINT items_total; // Number of the change elements UINT64 flags; // Depth of market flags INT64 datetime; // Time of Depth of market change INT64 datetime_msc; // Time of Depth of market change in milliseconds UINT reserved[64]; // Reserved field }; #pragma pack(pop) typedef MTBook MTBookDiff;  
---  
This structure is used in the following methods:
  * [IMTManagerAPI::BookGet](imtmanagerapi_bookget.md "BookGet")
  * [IMTBookSink::OnBook](imtbooksink_onbook.md "OnBook")
  * [IMTGatewayAPI::SendBookDiffs](imtgatewayapi_sendbookdiffs.md "SendBookDiffs")
  * [IMTGatewayAPI::SendBooks](imtgatewayapi_sendbooks.md "SendBooks")
  * [IMTServerAPI::BookGet](imtserverapi_bookget.md "BookGet")

Enumerations
The following enumerations are described in the structure:
EnBookFlags
The following Depth of Market flags are listed in EnBookFlags:
| ID | Value | Description |
| --- | --- | --- |
| --- | --- | --- |
| FLAG_PRE_AUCTION | 1 | The flag for using the Depth of Market in the absence of the auction. In the absence of the auction, traders' requests are not matched. Thus, the automatic tick data generation based on the best Depth of Market bid and ask prices is disabled in MetaTrader 5 platform. One of the typical examples of this flag application is Pre-Market period before trading actually starts when traders place their orders but they are not matched. In this case, buy offers may be displayed above sell ones or vice versa in the terminal Depth of Market. [MTBookItem.ItemSellMarket](mtbookitem.md "MTBookItem") and [MTBookItem.ItemBuyMarket](mtbookitem.md "MTBookItem") elements are used to display aggregate market requests. |
| FLAG_SNAPSHOT | 2 | Flag for internal use only. |
| FLAG_NONE | 0 | Beginning of enumeration. It corresponds to the absence of flags. |
| FLAG_ALL |  | End of enumeration. All flags are enabled. |

The structure contains the following parameters:
| Field | Type | Description |
| --- | --- | --- |
| --- | --- | --- |
| symbol | wchar_t | The symbol, for which the change is applied. |
| items | MTBookItem | The array of the Depth of Market changing elements of the [MTBookItem](mtbookitem.md "MTBookItem") type. The trading platform analyzes the items elements sent in the MTBookDiff structure strictly from the beginning to the end, consequently applying changes to the Market Depth. |
| items_total | UINT | The number of the transmitted elements in the items parameter. |
| flags | UINT64 | Depth of market flags. The enumeration [EnBookFlags](mtbook.htm#enbookflags) is used for passing the flags. |
| datetime | INT64 | Date and time of the depth of market change in seconds passed since 01.01.1970. This fields is not filled in by default (equal to 0) - the history server inserts the server's current trading time when receiving the data. If necessary, the gateway developer can set this date on their own. Using this feature implies 100% correctness of the transferred data time. Therefore, it should be used only when necessary. |

  * datetime_msc has a higher priority than datetime. The server will use this value if it it specified.
  * If datetime_msc is specified only, datetime value will be filled automatically on its basis (without milliseconds).
  * If datetime is specified only, datetime_msc value will be filled automatically on its basis (with zero value for milliseconds).

  
datetime_msc | INT64 | Date and time of the depth of market change in milliseconds passed since 01.01.1970. This fields is not filled in by default (equal to 0) - the history server inserts the server's current trading time when receiving the data. If necessary, the gateway developer can set this date on their own. Using this feature implies 100% correctness of the transferred data time. Therefore, it should be used only when necessary.
  * datetime_msc has a higher priority than datetime. The server will use this value if it it specified.
  * If datetime_msc is specified only, datetime value will be filled automatically on its basis (without milliseconds).
  * If datetime is specified only, datetime_msc value will be filled automatically on its basis (with zero value for milliseconds).

  
reserved | UINT | A reserved parameter.