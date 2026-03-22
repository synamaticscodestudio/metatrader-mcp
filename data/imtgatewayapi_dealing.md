# Processing Trade Requests (MetaTrader5SDK)

|  | [ Gateway API ](gatewayapi.md "Gateway API") / [ Main Interface ](imtgatewayapi.md "Main Interface")/ Processing Trade Requests | [](imtgatewayapi_gatewaysymbolget.md "GatewaySymbolGet") [](imtgatewayapi_dealerconfirmcreate.md "DealerConfirmCreate") |
| --- | --- | --- |
| --- | --- |

Processing Trade Requests
In accordance with the ideology of the MetaTrader 5 trading platform, customer request management is carried out through a queue of trade requests. A gateway written with the help of the Gateway API acts as a dealer, who works with the queue, receiving the queue status, capturing and processing trade requests, and then reporting the results of their processing.
  * All the functions described in this section are used only for gateways.
  * Details of working with trade operations are described in the ["Trade Operations in Gateway API"](gatewayapi_trade_processing.md "Trade Operations in Gateway API") section.

  
---  
The following dealer activity functions are available:
| Functions | Purpose |
| --- | --- |
| --- | --- |
| [DealerConfirmCreate](imtgatewayapi_dealerconfirmcreate.md "DealerConfirmCreate") | Create request confirmation interface object. |
| [DealerExecutionCreate](imtgatewayapi_dealerexecutioncreate.md "DealerExecutionCreate") | Create trade execution method of this object. |
| [DealerStart](imtgatewayapi_dealerstart.md "DealerStart") | Gateway connection to the trading platform as a dealer. |
| [DealerStop](imtgatewayapi_dealerstop.md "DealerStop") | DealerStart inverse method. After its successful execution the gateway will stop fulfilling the dealer functions. |
| [DealerGetAsync](imtgatewayapi_dealergetasync.md "DealerGetAsync") | Capture the most early (old) request from the requests queue. |
| [DealerLockAsync](imtgatewayapi_dealerlockasync.md "DealerLockAsync") | Capture a request from the requests queue by ID. |
| [DealerAnswerAsync](imtgatewayapi_dealeranswerasync.md "DealerAnswerAsync") | Return the results of the captured request processing. |
| [DealerExecuteAsync](imtgatewayapi_dealerexecuteasync.md "DealerExecuteAsync") | The platform notification on the order trade execution in the external system. |