# Files and Folders (MetaTrader5SDK)

|  | [ Getting Started ](getting_started.md "Getting Started")/ Files and Folders | [](installation.md "Setup") [](deinstallation.md "Delete") |
| --- | --- | --- |
| --- | --- |

Files and Folders
The [installation](installation.md "Setup") directory contains the following files and folders:
  * \Docs — documentation CHM files.
  * \Examples — examples for each API type.
  * \Include — header files for each API type.
  * \Libs — [Manager API](managerapi.md "Manager API") and [Gateway API](gatewayapi.md "Gateway API") DLLs, including .NET versions
  * unins000.* — MetaTrader 5 API uninstall program files.

Examples
The folder contains examples for API.
| Folders | Description |
| --- | --- |
| --- | --- |
| Gateway | [Examples for Gateway API](gatewayapi_develop_gateway.md "Developing and Debugging Gateways"). |
| Manager | [Examples for Manager API](managerapi_examples.md "Ready-made Examples"). |
| Report | [Examples for Report API](reportapi_examples.md "Ready-made Examples"). |
| Server | [Examples for Server API](serverapi_examples.md "Ready-made Examples"). |
| Web | Web API implementation examples in [PHP](php.md "Protocol Implementation in PHP") and [.NET](net.md "Protocol Implementation in .NET"). |

Include
This file contains header files for all APIs, as well as common header files.
| Folders and files | Description | Files |
| --- | --- | --- |
| --- | --- | --- |
| Bases | Descriptions of interfaces of common databases. |

  * MT5APIAccount.h — [trading account state](imtaccount.md "IMTAccount") description.
  * MT5Attachment.h — [attachment](imtattachment.md "IMTAttachment") description.
  * MT5APIBook.h — [Market Depth](mtbook.md "MTBook/MTBookDiff") description.
  * MT5APIByteStream.h — [byte stream](imtbytestream.md "IMTByteStream") description.
  * MT5APICertificate — [certificate](imtcertificate.md "IMTCertificate") description.
  * MT5APIChart — [chart bar](mtchartbar.md "MTChartBar") description.
  * MT5APIClient.h — [client](imtclient.md "IMTClient") description.
  * MT5APIComment.h — [comment](imtcomment.md "IMTComment") description.
  * MT5APIConfirm.h — [trade request confirmation](imtconfirm.md "IMTConfirm") description.
  * MT5APIDaily.h — [daily report description](imtdaily.md "\\IMTDaily").
  * MT5APIDataset.h — [data set](imtdataset.md "IMTDataset") description.
  * MT5APIDeal.h — [trade deal](imtdeal.md "IMTDeal") description.
  * MT5APIDocument.h — [client document](imtdocument.md "IMTDocument") description.
  * MT5APIExecution.h — [trade execution](imtexecution.md "IMTExecution") description.
  * MT5APIExposure.h — [exposure](imtexposure.md "IMTExposure") description.
  * MT5APIMail.h — [mail database](imtmail.md "IMTMail") description.
  * MT5APINews.h — [news database](imtnews.md "IMTNews") description.
  * MT5APIOnline.h — description of [online users](imtonline.md "IMTOnline").
  * MT5APIOrder.h — [trade order](imtorder.md "IMTOrder") description.
  * MT5APIPosition.h — [trade position](imtposition.md "IMTPosition") description.
  * MT5APIRequest.h — [trade request](imtrequest.md "IMTRequest") description.
  * MT5APISummary.h — [summary position](imtsummary.md "IMTSummary") description.
  * MT5APITick.h — [price data](mttick.md "MTTick") description.
  * MT5APIUser.h — [account](imtuser.md "IMTUser") description.

  
Config | Description of the configuration interfaces. | 
  * MT5APIConfigCommon.h — [common settings](imtconcommon.md "IMTConCommon").
  * MT5APIConfigEmail.h — [mail server](imtconemail.md "IMTConEmail") settings.
  * MT5APIConfigFeeder.h — [data feed](imtconfeeder.md "MTConFeeder") settings.
  * MT5APIConfigFirewall.h — [firewall](imtconfirewall.md "IMTConFirewall") settings.
  * MT5APIConfigFund.h — fund settings.
  * MT5APIConfigGateway.h — [gateway](imtcongateway.md "IMTConGateway") settings.
  * MT5APIConfigGroup.h — [group](imtcongroup.md "IMTConGroup") settings.
  * MT5APIConfigHistory.h — [historical data synchronization](imtconhistorysync.md "IMTConHistorySync") settings.
  * MT5APIConfigHoliday.h — [holiday](imtconholiday.md "IMTConHoliday") settings.
  * MT5APIConfigManager.h — [manager](imtconmanager.md "IMTConManager") settings.
  * MT5APIConfigMessenger.h — [instant messenger](imtconmessenger.md "IMTConMessenger") settings.
  * MT5APINetwork.h — settings of [platform components](imtconserver.md "IMTConServer").
  * MT5APIConfigParam.h — settings of [parameters of different configurations](imtconparam.md "IMTConParam") (for example, in data feeds, plugins, etc.).
  * MT5APIConfigPlugin.h — [plugin](imtconplugin.md "IMTConPlugin") settings.
  * MT5APIConfigReport — [report](imtconreport.md "IMTConReport") settings.
  * MT5APIConfigRoute.h — [routing](imtconroute.md "IMTConRoute") settings.
  * MT5APIConfigSpread.h — [spread](imtconspread.md "IMTConSpread") settings.
  * MT5APIConfigSymbol.h — [symbol](imtconsymbol.md "IMTConSymbol") settings.
  * MT5APIConfigTime.h — [time](imtcontime.md "IMTConTime") settings.

  
Classes | Classes of auxiliary functions. | 
  * MT5APIFile.h — functions for [operations with files](cmtfile.md "CMTFile").
  * MT5APIFormat.h — [string formatting](smtformat.md "SMTFormat") functions.
  * MT5APIMath.h — [mathematical transformation](smtmath.md "SMTMath") functions.
  * MT5APIMemPack.h — functions for memory operation.
  * MT5APIProcess.h — functions for operations with processes.
  * MT5APISearch.h — [sort and search](smtsearch.md "SMTSearch") functions.
  * MT5APIStorage.h — dynamic array class.
  * MT5APIStr.h — [string](cmtstr.md "CMTStr") class.
  * MT5APISync.h — class for [critical synchronization between threads](cmtsync.md "CMTSync").
  * MT5APIThread.h — [thread control](cmtthread.md "CMTThread") functions.
  * MT5APITime.h — [time conversion](smttime.md "SMTTime") functions.

  
MT5APIConstants.h | Common constants, such as error codes, etc.  
MT5APIGateway.h | The main header file of [Gateway API](imtgatewayapi.md "Main Interface").  
MT5APILogger.h | Constants and types used for the journal.  
MT5APIManager.h | The main header file of [Manager API](managerapi.md "Manager API").  
MT5APIPublicKey.h | Public key for signing data.  
MT5APIReport.h | The main header file of [Report API](imtreportapi.md "Main Report Interface").  
MT5APIServer.h | The main header file of [Server API](imtserverapi.md "Main API Interface").  
MT5APITools.h | Description of auxiliary functions and constants.  
MT5APITypes.h | Description of internal data types.  
Libs
This folder contains Manager API and Gateway API DLLs, including .NET versions.
| Folders | Description |
| --- | --- |
| --- | --- |
| MetaQuotes.MT5CommonAPI.dll | 32-bit DLL of common functions for the [Manager API](managerapi_net.md "Implementation in .NET") and [Gateway API](gatewayapi_net.md "Implementation in .NET") .NET wrapper. |
| MetaQuotes.MT5CommonAPI64.dll | 64-bit DLL of common functions for the [Manager API](managerapi_net.md "Implementation in .NET") and [Gateway API](gatewayapi_net.md "Implementation in .NET") .NET wrapper. |
| MetaQuotes.MT5GatewayAPI.dll | 32-bit DLL of [Gateway API](gatewayapi_net.md "Implementation in .NET") .NET version. |
| MetaQuotes.MT5GatewayAPI64.dll | 64-bit DLL of [Gateway API](gatewayapi_net.md "Implementation in .NET") .NET version. |
| MetaQuotes.MT5ManagerAPI.dll | 32-bit DLL of [Manager API](managerapi_net.md "Implementation in .NET") .NET version. |
| MetaQuotes.MT5ManagerAPI64.dll | 64-bit DLL of [Manager API](managerapi_net.md "Implementation in .NET") .NET version. |
| MetaQuotes.MT5WebAPI.dll | DLL of [Web API](net.md "Protocol Implementation in .NET") .NET implementation for 32 and 64 bit projects. |
| MT5APIGateway.dll | 32-bit [Gateway API](gatewayapi.md "Gateway API") DLL. |
| MT5APIGateway64.dll | 64-bit [Gateway API](gatewayapi.md "Gateway API") DLL. |
| MT5APIManager.dll | 32-bit [Manager API](managerapi.md "Manager API") DLL. |
| MT5APIManager64.dll | 64-bit [Manager API](managerapi.md "Manager API") DLL. |