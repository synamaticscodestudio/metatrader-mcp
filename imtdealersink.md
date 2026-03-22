# Dealer Interface (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API")/ Dealer Interface | [](imtmanagerapi_georesolvebatch.md "GeoResolveBatch") [](imtdealersink_ondealerresult.md "OnDealerResult") |
| --- | --- | --- |
| --- | --- |

Dealer Interface IMTDealerSink
The IMTDealerSink interface is used for subscribing to answers on trade requests that are formed by the dealer using the [IMTManagerAPI::DealerSend](imtmanagerapi_dealersend.md "DealerSend"). The answer is sent in two forms for each trade request:
| Method | Purpose |
| --- | --- |
| --- | --- |
| [OnDealerResult](imtdealersink_ondealerresult.md "OnDealerResult") | Asynchronous answer to a dealer's trade request in the form of the object of confirmation. |
| [OnDealerAnswer](imtdealersink_ondealeranswer.md "OnDealerAnswer") | Asynchronous answer to a dealer's trade request in the form of the object of request. |