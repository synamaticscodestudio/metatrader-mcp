# Categories (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Data Feeds ](config_datafeeds.md "Data Feeds") / [ IMTConFeeder ](imtconfeeder.md "MTConFeeder")/ Categories | [](imtconfeeder_keywords.md "Keywords") [](imtconfeeder_timeout.md "Timeout") |
| --- | --- | --- |
| --- | --- |

IMTConFeeder::Categories
Get the category of news received from a data feed.
C++
LPCWSTR IMTConFeeder::Categories()  
---  
.NET (Gateway/Manager API)
string CIMTConFeeder.Categories()  
---  
Python (Manager API)
MTConFeeder.Categories  
---  
Return Value
If successful, it returns a pointer to a string with the categories of news received from the data feed. Otherwise, it returns NULL.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTConFeeder](imtconfeeder.md "MTConFeeder") object.
To use the string after the object removal (call of the [IMTConFeeder::Release](imtconfeeder_release.md "Release") method of this object), a copy of it should be created.
IMTConFeeder::Categories
Set a category, to which all news received from the data feed will be assigned.
C++
MTAPIRES IMTConFeeder::Categories( LPCWSTR categories //Name of the news category )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConFeeder.Categories( string categories // Name of the news category )  
---  
Python (Manager API)
MTConFeeder.Categories  
---  
Parameters
categories
[in] The name of the news catego;ry.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The length of the category name is limited to 128 characters (including the end-of-line character). If a string of a greater length is assigned, it will be cut to this length.