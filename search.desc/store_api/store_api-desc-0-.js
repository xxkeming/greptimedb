searchState.loadedDescShard("store_api", 0, "Storage related APIs\nLogStore APIs.\nmetadata service\nMetadata of region and column.\nConstants used in metric engine.\nOption keys for the mito engine. We define them in this …\nPath constants for table engines, cluster states and WAL …\nRegion Engine’s definition\nStorage APIs.\nDense primary key encoding.\nPrimary key encoding mode.\nSparse primary key encoding.\nReturns the argument unchanged.\nInfer primary key encoding from hint.\nCalls <code>U::from(self)</code>.\nThis trait represents a common data source abstraction …\nRetrieves a stream of record batches based on the provided …\nThe response of an <code>append_batch</code> operation.\nThe response of an <code>append</code> operation.\n<code>LogStore</code> serves as a Write-Ahead-Log for storage engine.\nAppends a batch of entries and returns a response …\nCreates a new <code>Namespace</code> from the given ref.\nDeletes an existing <code>Namespace</code> specified by the given ref.\nMakes an entry instance of the associated Entry type\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nThe id of the entry appended to the log store.\nKey: region id (as u64). Value: the id of the last …\nLists all existing namespaces.\nMarks all entries with ids <code>&lt;=entry_id</code> of the given …\nCreates a new <code>EntryStream</code> to asynchronously generates <code>Entry</code>…\nStops components of the logstore.\nThe Entry::Naive is used in RaftEngineLogStore and …\nAn entry’s id. Different log store implementations may …\nReturns the Id\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nInto MultiplePartEntry if it’s type of …\nInto NaiveEntry if it’s type of Entry::Naive.\nReturns true if it’s a complete entry.\nReturns the Provider\nReturns the RegionId\nReturns the Id\nThe Provider of LogStore\nReturns the reference of <code>KafkaProvider</code> if it’s the type …\nReturns the reference of <code>RaftEngineProvider</code> if it’s the …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns true if it’s remote WAL.\nReturns the type name.\nReturns the type name.\nReturns the type name.\nThe checkpoint by checkpoint\nManifest service\nThe action to alter metadata\nCommon actions for manifest\nDecode self from byte slice with reader protocol version, …\nDecode self from byte slice with reader protocol version, …\nDelete logs in [start, end) and ignore checkpoints.\nDelete all logs and checkpoints, and remove the manifest …\nDelete the checkpoint by version\nDelete logs and checkpoints which version is less than …\nDo a checkpoint, it will create a checkpoint and compact …\nEncode this action into a byte vector\nEncode this checkpoint into a byte vector\nReturns the last success checkpoint\nThe last compacted action’s version of checkpoint\nReturns the last(or latest) manifest version.\nLoad the checkpoint by version\nLoad the latest checkpoint\nSave a log\nSave a checkpoint.\nScan the logs in [start, end)\nScan actions which version in range [start, end)\nSet previous valid manifest version.\nSet a protocol action into meta action\nSet a protocol action into checkpoint\nStart the service\nStop the service\nUpdate metadata by the action\nProtocol action that used to block older clients from …\nCurrent reader and writer versions TODO(dennis): …\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nThe maximum protocol version we are currently allowed to …\nDelete logs in [start, end) and ignore checkpoints.\nDelete all logs and checkpoints, and remove the manifest …\nDelete the checkpoint by version\nDelete logs and checkpoints which version is less than …\nLoad the checkpoint by version\nLoad the latest checkpoint\nSave a log\nSave a checkpoint.\nScan the logs in [start, end)\nSNAFU context selector for the …\nMetadata of a column.\nSNAFU context selector for the …\nSNAFU context selector for the <code>MetadataError::DecodeProto</code> …\nContains the error value\nSNAFU context selector for the …\nSNAFU context selector for the <code>MetadataError::InvalidMeta</code> …\nSNAFU context selector for the …\nSNAFU context selector for the …\nSNAFU context selector for the <code>MetadataError::InvalidSchema</code>…\nSNAFU context selector for the …\nSNAFU context selector for the …\nContains the success value\nGeneral static metadata of a region.\nBuilder to build RegionMetadata.\nSNAFU context selector for the <code>MetadataError::SchemaProject</code>…\nSNAFU context selector for the <code>MetadataError::SerdeJson</code> …\nSNAFU context selector for the …\nFields skipped in serialization.\nSNAFU context selector for the …\nAdds columns to the metadata if not exist.\nApplies the alter <code>kind</code> to the builder.\nConsumes the builder and build a RegionMetadata.\nConsume the selector and return the associated error\nConsume the selector and return the associated error\nConsume the selector and return the associated error\nConsume the selector and return the associated error\nConsume the selector and return the associated error\nConsume the selector and return the associated error\nConsume the selector and return the associated error\nConsume the selector and return the associated error\nIncreases the schema version by 1.\nFind column by id.\nFinds a column by name.\nImmutable and unique id of a region.\nFind column index by id.\nFind column index by name.\nColumns in the region. Has the same order as columns in …\nSchema of this column. Is the same as <code>column_schema</code> in …\nDecodes a JSON byte vector into a vector of <code>ColumnMetadata</code>.\nDrops columns from the metadata if exist.\nEncodes a vector of <code>ColumnMetadata</code> into a JSON byte vector.\nConsume the selector and return a <code>Result</code> with the …\nConsume the selector and return a <code>Result</code> with the …\nConsume the selector and return a <code>Result</code> with the …\nConsume the selector and return a <code>Result</code> with the …\nConsume the selector and return a <code>Result</code> with the …\nConsume the selector and return a <code>Result</code> with the …\nConsume the selector and return a <code>Result</code> with the …\nConsume the selector and return a <code>Result</code> with the …\nReturns all field columns before projection.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCreates a builder from existing RegionMetadata.\nDecode the metadata from a JSON str.\nMap column id to column’s index in column_metadatas.\nMap column id to column’s index in column_metadatas.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nGets the column ids to be indexed by inverted index.\nChanges columns type to the metadata if exist.\nReturns a new builder.\nConstructs skipped fields from <code>column_metadatas</code>.\nSets the primary key of the region.\nMaintains an ordered list of primary keys\nReturns all primary key columns.\nSets the primary key encoding mode.\nPrimary key encoding mode.\nReturns a column’s index in primary key if it is a …\nProject the metadata to a new one using specified column …\nPushes a new column metadata to this region’s metadata.\nImmutable and unique id of a region.\nLast schema.\nLatest schema constructed from column_metadatas.\nCurrent version of the region schema.\nSemantic type of this column (e.g. tag or timestamp).\nId of the time index column.\nId of the time index column.\nReturns the time index column\nReturns the position of the time index.\nReturns the arrow field of the time index column.\nEncode the metadata to a JSON string.\nConstruct <code>Self</code> from protobuf struct RegionColumnDef\nChecks whether the metadata is valid.\nChecks whether it is a valid column.\nHashMap key to be used in the region server’s extension …\nColumn name of internal column <code>__metric</code> that stores the …\nMetadata key present in the <code>CREATE TABLE ... WITH ()</code> …\nregion group value for data region inside a metric region\nOption key for the granularity of the skipping index in …\nDefault granularity for the skipping index in the metric …\nOption key for metric engine index type. Used to identify …\nregion group value for metadata region inside a metric …\nMetadata key present in the <code>CREATE TABLE ... WITH ()</code> …\nReturns true if it’s metric engine\nReturns true if it’s a internal column of the metric …\nReturns true if the <code>key</code> is a valid option key for the …\nOption key for append mode.\nOption key for compaction type.\nTWCS compaction strategy.\nOption key for memtable partition tree data freeze …\nOption key for memtable partition tree fork dictionary …\nOption key for memtable partition tree index max keys per …\nOption key for memtable partition tree primary key …\nOption key for memtable type.\nOption key for merge mode.\nOption key for twcs remote compaction.\nOption key for TTL(time-to-live)\nOption key for twcs fallback to local.\nOption key for twcs max active window files.\nOption key for twcs max active window runs.\nOption key for twcs max inactive window files.\nOption key for twcs max inactive window runs.\nOption key for twcs max output file size.\nOption key for twcs time window.\nReturns true if the <code>key</code> is a valid option key for the mito …\nCluster state dir\nData dir for table engines\nWAL dir for local file storage\nget_storage_path returns the storage path from the …\nGenerate region name in the form of “{TABLE_ID}_…\nRepresents one data range within a partition\nRequest to override the scanner properties.\nThe role of the region. TODO(weny): rename it to …\nA scanner that provides a way to scan the region …\nRepresents the statistics of a region.\nOutput partition properties of the RegionScanner.\nProperties of the RegionScanner.\nThe request to set region role state.\nThe response of setting region role state.\nThe settable region role state.\nA RegionScanner that only scans a single partition.\nUnknown partitioning scheme with a known number of …\nWhether scanner is in append-only mode.\nDeserializes the region statistic to a byte array.\nWhether to yield an empty batch to distinguish partition …\nDistringuishes partition range by empty batches.\nEnd time of time index column. Exclusive.\nReturns the estimated disk size of the region.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nRetrieves region’s metadata.\nHandles batch open region requests.\nHandles query and return a scanner that can be used to …\nHandles non-query request to the region. Returns the count …\nCheck if there is any predicate that may be executed in …\nIdentifier to this range. Assigned by storage engine.\nThe size of SST index files in bytes.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nThe size of manifest in bytes.\nThe size of memtable in bytes.\nReturns the metadata of the region.\nName of this engine\nCreates a new SinglePartitionScanner with the given stream …\nCreates a new <code>ScannerProperties</code> with the given …\nReturns the number of partitions.\nReturns the number of actual partitions.\nNumber of rows in this range. Is used to balance ranges …\nThe number of rows\nA 2-dim partition ranges.\nPrepares the scanner with the given partition ranges.\nUpdates the properties with the given PrepareRequest.\nReturns the properties of the scanner.\nAssigned partition ranges.\nRetrieves region’s statistic.\nIndicates region role.\nScans the partition and returns a stream of record batches.\nReturns the schema of the record batches.\nSerializes the region statistic to a byte array.\nSets RegionRole for a region.\nSets region role state gracefully.\nThe size of SST data files in bytes.\nStart time of time index column. Inclusive.\nStops the engine\nReturns a SetRegionRoleStateResponse::Success with the …\nReturns the target partitions of the scanner. If it is not …\nThe target partitions of the scanner. 0 indicates using …\nThe expected number of target partitions.\nTotal rows that <strong>may</strong> return by scanner. This field is only …\nThe size of WAL in bytes.\nSets append mode for scanner.\nSets the distinguish partition range flag.\nSets the ranges.\nSets the target partitions.\nSets total rows for scanner.\nReturns <code>last_entry_id</code> of the region if available(e.g., It…\nAdds a column.\nLocation to add a column.\nAdd columns to the region.\nAdd the column after specific column.\nKind of the alteration.\nDrop columns from the region, only fields are allowed to …\nAdd the column to the first position of columns.\nChange a column’s datatype.\nChange columns datatype form the region, only fields are …\nAlter metadata of a region.\nCatchup region request.\nClose region request.\nRequest to delete data from a region.\nOpen region request.\nRequest to put data into a region.\nTruncate region request.\nSet index options.\nSet region options.\nUnset index options.\nUnset region options.\nMetadata of the column to add.\nColumns in this region.\nSchema of the column to modify.\nRegion engine name\nRegion engine name\nThe <code>entry_id</code> that was expected to reply to. <code>None</code> stands …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nWrite hint.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns true when the region belongs to the metric engine…\nReturns true when the region belongs to the metric engine…\nKind of alteration to do.\nLocation to add the column. If location is None, the …\nThe hint for replaying memtable.\nReturns true if we need to apply the request to the region.\nReturns true if we need to apply the alteration to the …\nReturns true if no column to add to the region.\nReturns true if no column’s datatype to change to the …\nOptions of the created region.\nOptions of the opened region.\nColumns in the primary key.\nDirectory for region’s data home. Usually is composed by …\nData directory of the region.\nReturns the type name of the request.\nRows to put.\nKeys to rows to delete.\nThe version of the schema before applying the alteration.\nSets it to writable if it’s available after it has …\nTo skip replaying the WAL.\nColumn will be changed to this type.\nConvert Body to a group of RegionRequest with region id. …\nChecks whether the request is valid, returns an error if …\nChecks whether the request is valid, returns an error if …\nReturns an error if the alter kind is invalid.\nReturns an error if the column to add is invalid.\nReturns an error if the column’s datatype to change is …\nReturns an error if the column’s alter index option is …\nReturns an error if the column to drop is invalid.\nAdd the column after this column.\nColumns to add.\nColumns to change.\nName of columns to drop.\nColumn’s default constraint.\nA ColumnDescriptor contains information to create a column.\nBuilder for <code>ColumnDescriptor</code>.\nError type for ColumnDescriptorBuilder\nId of column. Unique in each region.\nSchema of a column, used as an immutable struct.\nInitial version of the schema.\nOnly keep the last row of each time-series.\nThe max valid region sequence number.\nGroup number of one region. Unique in each region.\nId of the region. It’s generated by concatenating table …\nId of regions under the same table. Unique in each table. …\nSequence number of region inside one table. Unique in each …\nA common schema, should be immutable.\nRepresents a sequence number of data in storage. The …\nId of table. Universal unique.\nA hint on how to select rows from a time-series.\nUninitialized field\nCustom validation error\nAdd key value pair to metadata.\nConvert this type as arrow::datatypes::DataType.\nTry to cast data type as a <code>DurationType</code>.\nTry to cast the type as a <code>ListType</code>.\nTry to cast data type as a <code>TimeType</code>.\nTry to cast data type as a <code>TimestampType</code>.\nChecks if the data type can cast to another data type.\nRetrieve the column comment\nRetrieve the column’s name by index\nConstants.\nCreates a default value for this column.\nCreate a default value for given <code>data_type</code>.\nCreates a vector with default value for this column.\nCreate a vector that contains <code>num_rows</code> default values for …\nCreates a vector for padding.\nCreates an impure default value for this column, only if …\nOnly create default value if it’s impure, i.e., it’s a …\nOnly create default vector if it’s impure, i.e., it’s …\nCreates a mutable vector with given <code>capacity</code> of this type.\nDefault constraint of column, default is None, which means …\nDefault constraint of column, default is None, which means …\nReturns the default value of this type.\nCreates a [Duration(DurationMicrosecondType)] datatype.\nCreates a [Duration(DurationMillisecondType)] datatype.\nCreates a [Duration(DurationNanosecondType)] datatype.\nCreates a [Duration(DurationSecondType)] datatype.\nFilters pushed down\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nConverts from arrow timestamp unit to\nConvert arrow data type to ConcreteDataType.\nRetrieves the fulltext options for the column.\nCreates a [Interval(IntervalDayTimeType)] datatype.\nCreates a [Interval(IntervalMonthDayNanoType)] datatype.\nCreates a [Interval(IntervalYearMonthType)] datatype.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCheck if the default constraint is a impure function.\nReturns true if this constraint is a function.\nIs column nullable, default is true.\nIs column nullable, default is true.\nIs time index column, default is true.\nIs time index column, default is true.\nlimit can be used to reduce the amount scanned from the …\nReturns id of the Logical data type.\nName of this data type.\nCreate a schema from a vector of ColumnSchema.\nReturns a default null constraint.\nTry to get numeric precision, returns <code>None</code> if it’s not …\nTry to get numeric scale, returns <code>None</code> if it’s float or …\nExpected output ordering. This is only a hint and isn’t …\nReturn the datatype name in postgres type system\nIndices of columns to read, <code>None</code> to read all columns. This …\nOptional constraint on the sequence number of the rows to …\nOptional hint to select rows from time-series.\nSet the inverted index for the column. Similar to …\nSet the nullability to <code>true</code> of the column. Similar to …\nSet the <code>is_time_index</code> to <code>true</code> of the column. Similar to …\nRetrieves the skipping index options for the column.\nReturns the time data type with <code>TimeUnit</code>.\nCreates a [Time(TimeMicrosecond)] datatype.\nCreates a [Time(TimeMillisecondType)] datatype.\nCreates a [Time(TimeNanosecond)] datatype.\nCreates a [Time(TimeSecondType)] datatype.\nReturns index of the timestamp key column.\nCasts the value to specific DataType. Return None if cast …\nTry to Create a schema from a vector of ColumnSchema.\nGenerate a new projected schema\nCommon types.\nCheck whether the constraint is valid for columns with …\nSet default constraint.\nSet the inverted index for the column. Similar to …\nCreates a new <code>ColumnSchema</code> with given metadata.\nSet the nullablity to <code>true</code> of the column. Similar to …\nInternal Column Name\nName for reserved column: op_type\nName for reserved column: primary_key\nColumn id reserved by the engine.\nName for reserved column: sequence\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nTest if the column id is reserved.\nId for <code>__op_type</code> column.\nId for <code>__sequence</code> column.\nId for storing logical table id column.\nId for storing TSID column.\nColumn id for version column. Version column is a special …\nA ColumnDescriptor contains information to create a column.\nBuilder for <code>ColumnDescriptor</code>.\nError type for ColumnDescriptorBuilder\nId of column. Unique in each region.\nThe max valid region sequence number.\nGroup number of one region. Unique in each region.\nId of the region. It’s generated by concatenating table …\nId of regions under the same table. Unique in each table. …\nSequence number of region inside one table. Unique in each …\nId of table. Universal unique.\nUninitialized field\nCustom validation error\nReturns the region id as u64.\nBuilds a new <code>ColumnDescriptor</code>.\nCreate an empty builder, with all fields set to <code>None</code> or …\nDefault constraint of column, default is None, which means …\nDefault constraint of column, default is None, which means …\nDefault constraint of column, default is None, which means …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nConstruct a new RegionId from u64.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nIs column nullable, default is true.\nIs column nullable, default is true.\nIs column nullable, default is true.\nIs time index column, default is true.\nIs time index column, default is true.\nIs time index column, default is true.\nConstruct a new RegionId from table id and region number.\nReturns the group number of the region\nReturns the region number of the region.\nReturn the sequence number of the region\nReturns the table id of the region.\nConvert ColumnDescriptor to ColumnSchema. Fields not in …\nConstruct a new RegionId from table id, region group and …\nOnly keep the last row of each time-series.\nA hint on how to select rows from a time-series.\nFilters pushed down\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nlimit can be used to reduce the amount scanned from the …\nExpected output ordering. This is only a hint and isn’t …\nIndices of columns to read, <code>None</code> to read all columns. This …\nOptional constraint on the sequence number of the rows to …\nOptional hint to select rows from time-series.\nRepresents a sequence number of data in storage. The …")