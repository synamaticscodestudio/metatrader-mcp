# Assign (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Assets ](trading_exposure.md "Assets") / [ IMTExposure ](imtexposure.md "IMTExposure")/ Assign | [](imtexposure_release.md "Release") [](imtexposure_clear.md "Clear") |
| --- | --- | --- |
| --- | --- |

IMTExposure::Assign
Assign a passed object to the current one.
C++
MTAPIRES IMTExposure::Assign( const IMTExposure* exposure // Source object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTExposure.Assign( CIMTExposure  exposure // Source object )  
---  
Parameters
exposure
[in] Source object.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.