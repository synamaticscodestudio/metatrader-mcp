# OnBook (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Depth of Market ](reference_dom.md "Depth of Market") / [ IMTBookSink ](imtbooksink.md "IMTBookSink")/ OnBook | [](imtbooksink.md "IMTBookSink") [](reference_mail.md "Mail Database") |
| --- | --- | --- |
| --- | --- |

IMTBookSink::OnBook
A handler of the event of the received update of the Depth of Market.
C++
virtual void IMTBookSink::OnBook( const MTBook& book // A reference to the update structure )  
---  
.NET (Gateway/Manager API)
virtual void CIMTBookSink.OnBook( MTBook book // The update structure )  
---  
Parameters
tick
[out] A reference to the structure that describes change of the Market Depth ([MTBook](mtbook.md "MTBook/MTBookDiff")).
Note
Manager API always receives the full Marked Depth state in this handler (rather than changes relative to the current state). Market Depth elements passed in [MTBook::items](mtbook.md "MTBook/MTBookDiff") are sorted by price in the descending order. Market Depth reset elements ([MTBookItem::ItemReset](mtbookitem.htm#enbookitem)) are not used in Manager API.