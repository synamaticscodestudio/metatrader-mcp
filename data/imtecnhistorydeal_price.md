# Price (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ ECN ](reference_ecn.md "The ECN") / [ IMTECNHistoryDeal ](imtecnhistorydeal.md "IMTECNFilling")/ Price | [](imtecnhistorydeal_volumeext.md "VolumeInitialExt") [](imtecnhistorydeal_pricegateway.md "PriceGateway") |
| --- | --- | --- |
| --- | --- |

IMTECNHistoryDeal::Price
Get the price at which the deal was executed on the platform side.
C++
double IMTECNHistoryDeal::Price() const  
---  
.NET (Gateway/Manager API)
double CIMTECNHistoryDeal.Price()  
---  
Return Value
The price at which the deal was executed on the platform side.
Note
The price is passed taking into account [translation settings](https://support.metaquotes.net/en/docs/mt5/platform/administration/ecn/ecn_translation#general).
IMTECNHistoryFilling::Price
Set the price at which the deal was executed on the platform side.
C++
MTAPIRES IMTECNHistoryDeal::Price( const double price // deal price )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTECNHistoryDeal.Price( double  price // deal price )  
---  
Parameters
price
[in] The price at which the deal was executed on the platform side.
Return Value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.