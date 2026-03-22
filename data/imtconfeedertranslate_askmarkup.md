# AskMarkup (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Data Feeds ](config_datafeeds.md "Data Feeds") / [ IMTConFeederTranslate ](imtconfeedertranslate.md "IMTConFeederTranslate")/ AskMarkup | [](imtconfeedertranslate_bidmarkup.md "BidMarkup") [](imtconfeedertranslate_digits.md "Digits") |
| --- | --- | --- |
| --- | --- |

IMTConFeederTranslate::AskMarkup
Get a correction to the Ask price arriving for a symbol from a data feed.
C++
INT IMTConFeederTranslate::AskMarkup() const  
---  
.NET (Gateway/Manager API)
int CIMTConFeederTranslate.AskMarkup()  
---  
Python (Manager API)
MTConFeederTranslate.AskMarkup  
---  
Return Value
A correction to the Ask price arriving for a symbol from a data feed.
IMTConFeederTranslate::AskMarkup
Set a correction to the Ask price arriving for a symbol from a data feed.
C++
MTAPIRES IMTConFeederTranslate::AskMarkup( const INT markup // Value of the Ask price correction )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConFeederTranslate.AskMarkup( int markup // Value of the Ask price correction )  
---  
Python (Manager API)
MTConFeederTranslate.AskMarkup  
---  
Parameters
markup
[in] The value of correction of the Ask price.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.