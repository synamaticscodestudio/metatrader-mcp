# Enumerations (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Dataset Interfaces ](reportapi_dataset.md "Dataset Interfaces") / [ IMTDatasetSummary ](imtdatasetsummary.md "IMTDatasetSummary")/ Enumerations | [](imtdatasetsummary.md "IMTDatasetSummary") [](imtdatasetsummary_release.md "Release") |
| --- | --- | --- |
| --- | --- |

Enumerations
The [IMTDatasetSummary](imtdatasetsummary.md "IMTDatasetSummary") interface contains the following enumerations:
  * [IMTDatasetSummary::EnType](imtdatasetsummary_enum.htm#entype)
  * [IMTDatasetSummary::EnFlags](imtdatasetsummary_enum.htm#enflags)

IMTDatasetSummary::EnType
Types of values that can be written in a table summary row are listed in IMTDatasetSummary::EnType.
| ID | Value | Description |
| --- | --- | --- |
| --- | --- | --- |

Basic types  
TYPE_INT64 | 0 | Integer (64 bits).  
TYPE_UINT64 | 1 | Unsigned integer (64 bits).  
TYPE_DOUBLE | 2 | Floating-point number.  
TYPE_MONEY | 3 | Monetary unit.  
TYPE_STRING | 4  | A string in the Unicode format.  
TYPE_DATE | 5 | Date.  
TYPE_TIME | 6 | Time.  
TYPE_DATETIME | 7 | Date and time.  
Prices  
TYPE_PRICE | 100 | Price.  
TYPE_PRICES | 101 | Bid/Ask prices.  
Volumes  
TYPE_VOLUME | 200 | Volume.  
TYPE_VOLUME_ORDER | 201 | Initial/current volume.  
TYPE_VOLUME_EXT | 202 | [Extended precision](features.htm#volume) volume.  
TYPE_VOLUME_ORDER_EXT | 203 | Initial/current order volume with [extended precision](features.htm#volume).  
TYPE_VOLUME_POSITION_EXT | 204 | Closed/initial position volume with [extended precision](features.htm#volume).  
This enumeration is used in the [IMTDatasetSummary::Type](imtdatasetsummary_type.md "Type") method
IMTDatasetSummary::EnFlags
Summary row flags are listed in IMTDatasetSummary::EnFlags (under development):
| ID | Value | Description |
| --- | --- | --- |
| --- | --- | --- |
| FLAG_NONE | 0x0 | No flags. |

This enumeration is used in the [IMTDatasetSummary::Flags](imtdatasetsummary_flags.md "Flags") method.