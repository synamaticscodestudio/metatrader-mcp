# Enumerations (MetaTrader5SDK)

|  | [ Gateway API ](gatewayapi.md "Gateway API") / [ Main Interface ](imtgatewayapi.md "Main Interface")/ Enumerations | [](imtgatewayapi.md "Main Interface") [](imtgatewayapi_common.md "Common Functions") |
| --- | --- | --- |
| --- | --- |

Enumerations
The following enumerations are provided in the IMTGatewayAPI interface:
  * [IMTGatewayAPI::EnDealerRequestFlags](imtgatewayapi_enum.htm#endealerrequestflags)
  * [IMTGatewayAPI::EnConnectType](imtgatewayapi_enum.htm#enconnecttype)

IMTGatewayAPI::EnDealerRequestFlags
The flags describing additional options for a gateway connection as a dealer are listed in IMTGatewayAPI::EnDealerRequestFlags:
| ID | Value | Description |
| --- | --- | --- |
| --- | --- | --- |
| DEALER_FLAG_NONE | 0x00000000 | No additional connection flags. |
| DEALER_FLAG_AUTOLOCK | 0x00000001 | Capture new requests from the queue automatically. |
| DEALER_FLAG_USER | 0x00000002 | Additionally, get the data on the user who sent a request. In case this flag is turned on, users data will be transferred to the const IMTUser *user parameter of the following methods: |

  * [IMTGatewaySink::OnDealerLock](imtgatewaysink_ondealerlock.md "OnDealerLock")
  * [IMTGatewayAPI::RequestNext](imtgatewayapi_requestnext.md "RequestNext")
  * [IMTGatewayAPI::RequestGet](imtgatewayapi_requestget.md "RequestGet")

  
DEALER_FLAG_ACCOUNT | 0x00000004 | Additionally, get trading account data of the user who sent a request. In case this flag is turned on, trading account data will be transferred to the const IMTAccount *account parameter of the following methods:
  * [IMTGatewaySink::OnDealerLock](imtgatewaysink_ondealerlock.md "OnDealerLock")
  * [IMTGatewayAPI::RequestNext](imtgatewayapi_requestnext.md "RequestNext")
  * [IMTGatewayAPI::RequestGet](imtgatewayapi_requestget.md "RequestGet")

  
DEALER_FLAG_ORDER | 0x00000008 | Additionally, get the data on the order that corresponds to the submitted request. In case this flag is turned on, the data on the order will be transferred to the const IMTOrder *order parameter of the following methods:
  * [IMTGatewaySink::OnDealerLock](imtgatewaysink_ondealerlock.md "OnDealerLock")
  * [IMTGatewayAPI::RequestNext](imtgatewayapi_requestnext.md "RequestNext")
  * [IMTGatewayAPI::RequestGet](imtgatewayapi_requestget.md "RequestGet")

Note:
  * Actual prices in the platform are specified in the 'order' parameter without regard to translation parameters ([IMTConGatewayTranslate](imtcongatewaytranslate.md "IMTConGatewayTranslate")) set for the gateway.

  * An order is created in the platform for the execution of most requests. For example, to execute a position closing request, an order is created and the execution of the order will close the position. The order data is written to the 'order' parameter of the specified methods along with the request data. Similar behavior is used for triggered SL/TP levels, Stop Out etc. However, for [IMTRequest::TA_SLTP](imtrequest_enum.htm#ta_sltp) requests, the 'order' parameter is not filled even if DEALER_FLAG_ORDER is enabled, since no order is created in the platform in this case.

  
DEALER_FLAG_POSITION | 0x00000010 | Additionally, get a user position data by the request symbol before its execution. In case this flag is turned on, a user position data will be transferred to the const IMTPosition *position parameter of the following methods:
  * [IMTGatewaySink::OnDealerLock](imtgatewaysink_ondealerlock.md "OnDealerLock")
  * [IMTGatewayAPI::RequestNext](imtgatewayapi_requestnext.md "RequestNext")
  * [IMTGatewayAPI::RequestGet](imtgatewayapi_requestget.md "RequestGet")

Note: Actual prices in the platform are specified in the 'position' parameter without regard to translation parameters ([IMTConGatewayTranslate](imtcongatewaytranslate.md "IMTConGatewayTranslate")) set for the gateway.  
DEALER_FLAG_EXTERNAL_ACC | 0x00000020 | Additionally get information about the account number of a client in an external trade system. In case this flag is turned on, the information about the account is filled in the [IMTRequest](imtrequest.md "IMTRequest") object that is passed as a parameter by the following functions:
  * [IMTGatewaySink::OnDealerLock](imtgatewaysink_ondealerlock.md "OnDealerLock")
  * [IMTGatewayAPI::RequestNext](imtgatewayapi_requestnext.md "RequestNext")
  * [IMTGatewayAPI::RequestGet](imtgatewayapi_requestget.md "RequestGet")

  
DEALER_FLAG_MARKUP_TRADES | 0x00000040 | This flag allows automatic conversion of prices of trade operations when passing the prices from the gateway side into the MetaTrader 5 and back at the Gateway API level in accordance with the settings of [IMTConGatewayTranslate::BidMarkup](imtcongatewaytranslate_bidmarkup.md "BidMarkup") and [IMTConGatewayTranslate::AskMarkup](imtcongatewaytranslate_askmarkup.md "AskMarkup"). Prices of the quoting flow (including the Depth of Market) are always converted in accordance with the IMTConGatewayTranslate::BidMarkup and IMTConGatewayTranslate::AskMarkup settings.  
This enumeration is used in the [IMTGatewayAPI::DealerStart](imtgatewayapi_dealerstart.md "DealerStart") method.
IMTGatewayAPI::EnConnectType
IMTGatewayAPI::EnConnectType lists the types of platform components.
| ID | Value | Purpose |
| --- | --- | --- |
| --- | --- | --- |
| CONNECT_TYPE_TRADE | 1 | Trade server. |
| CONNECT_TYPE_HISTORY | 2 | History server. |
| CONNECT_TYPE_ECN | 3 | Access server. |
| CONNECT_TYPE_BACKUP | 4 | Backup server. |

The enumeration is used in the following methods:
  * [IMTGatewaySink::OnServerDisconnect](imtgatewaysink_onserverdisconnect.md "OnServerDisconnect")
  * [IMTGatewaySink::OnServerSynchronized](imtgatewaysink_onserversynchronized.md "OnServerSynchronized")
  * [IMTGatewaySink::HookServerConnect ](imtgatewaysink_hookserverconnect.md "HookServerConnect")
