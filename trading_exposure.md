# Assets (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade")/ Assets | [](imtsummarysink_onsummaryupdate.md "OnSummaryUpdate") [](imtexposure.md "IMTExposure") |
| --- | --- | --- |
| --- | --- |

Assets
The MetaTrader 5 API allows receiving information about clients' exposure and company's hedged assets.
An important feature of working with assets is that they are bound to a certain trade server. Therefore, the application can only receive information about the exposure of client and coverage* account groups on the server to which this application is connected.
Hedging positions apply to all accounts in coverage* groups.  
---  
The following exposure interfaces are available:
  * [IMTExposure](imtexposure.md "IMTExposure") An interface describing the record of one asset.
  * [IMTExposureArray](imtexposurearray.md "IMTExposureArray") An interface for working with the arrays of asset records.
  * [IMTExposureSink](imtexposuresink.md "IMTExposureSink") An interface for handling events associated with exposure modification.

To help you understand the purpose of interfaces intended for working with exposure, the below figure shows their compliance with the elements in MetaTrader 5 Manager:
The following elements are shown above:
  1. [Asset name](imtexposure_symbol.md "Symbol").
  2. [The volume of client assets](imtexposure_volumeclients.md "VolumeClients").
  3. [The volume of coverage assets](imtexposure_volumecoverage.md "VolumeCoverage").
  4. [Conversion rate](imtexposure_pricerate.md "PriceRate") of as asset to a selected currency.
  5. [Net total](imtexposure_volumenet.md "VolumeNet") of assets in the selected currency.
