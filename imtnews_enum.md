# Enumerations (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ News Database ](reference_news.md "News Database") / [ IMTNews ](imtnews.md "IMTNews")/ Enumerations | [](imtnews.md "IMTNews") [](imtnews_release.md "Release") |
| --- | --- | --- |
| --- | --- |

Enumerations
The [IMTNews](imtnews.md "IMTNews") class contains the following enumerations:
IMTNews::EnNewsFlags
Available news flags are enumerated in IMTNews::EnNewsFlags:
| ID | Value | Description |
| --- | --- | --- |
| --- | --- | --- |
| NEWS_FLAGS_NONE | 0x0000 | No flags. |
| NEWS_FLAGS_PRIORITY | 0x0001 | Flag of a high-priority news item. |
| NEWS_FLAGS_READ | 0x0002 | Flag of whether a news item is read or unread. |
| NEWS_FLAGS_NOBODY | 0x0004 | Flag of a news item that does not have the body (only the header). |
| NEWS_FLAGS_CALENDAR | 0x0008 | Flag of economic calendar news. |
| NEWS_FLAGS_FIRST |  | Beginning of enumeration. It corresponds to NEWS_FLAGS_NONE. |
| NEWS_FLAGS_ALL |  | End of enumeration. It corresponds to NEWS_FLAGS_CALENDAR. |

This enumeration is used in the [IMTNews::Flags](imtnews_flags.md "Flags") method.