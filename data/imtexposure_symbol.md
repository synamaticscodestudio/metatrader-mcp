# Symbol (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Assets ](trading_exposure.md "Assets") / [ IMTExposure ](imtexposure.md "IMTExposure")/ Symbol | [](imtexposure_clear.md "Clear") [](imtexposure_digits.md "Digits") |
| --- | --- | --- |
| --- | --- |

IMTExposure::Symbol
Gets the name of an asset.
C++
LPCWSTR IMTExposure::Symbol() const  
---  
.NET (Gateway/Manager API)
string CIMTExposure.Symbol()  
---  
Return Value
If successful, it returns a pointer to a string with the name of the asset. Otherwise, it returns NULL.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTExposure](imtexposure.md "IMTExposure") method.
To use the string after the object removal (call of the [IMTExposure::Release](imtexposure_release.md "Release") method of this object), a copy of it should be created.