# OnExposureUpdate (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Assets ](trading_exposure.md "Assets") / [ IMTExposureSink ](imtexposuresink.md "IMTExposureSink")/ OnExposureUpdate | [](imtexposuresink.md "IMTExposureSink") [](trading_daily.md "Daily Reports") |
| --- | --- | --- |
| --- | --- |

IMTExposureSink::OnExposureUpdate
A handler of the exposure modification event.
C++
virtual void IMTExposureSink::OnExposureUpdate( const IMTExposure* exposure // A pointer to the asset record object )  
---  
.NET (Gateway/Manager API)
virtual void CIMTExposureSink.OnExposureUpdate( CIMTExposure exposure // The asset record object )  
---  
Parameters
exposure
[in] A pointer to the object of the updated asset record.
Note
This method is called by the API to notify that an asset record has been modified.