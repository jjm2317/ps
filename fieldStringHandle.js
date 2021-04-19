// 개행으로 구분된 string 대상

// snake case to camel case
const getSnakeToCamel = (str) => {
  const arr = str.split("\n");
  return arr.map((item) => {
    const result = item.replace(/_./gi, (match) => match[1].toUpperCase());
    return result;
  });
};

// field 앞에 String 붙이기
const getAddTypeString = (arr) => arr.map((v) => `String ${v}`);

// jsonObject.put("필드이름", ) 만들기
const getJsonObjectPutStatement = (str) => {
  const arr = str.split("\n").map((v) => `jsonObject.put("${v}", );`);
  return arr.join("\n");
};

/* qkd 관련 field*/
const qkdNode = `qkdn_id
qkdn_location_id
qkdn_state
qkdi_id
qkdi_role_support
qkdi_model
qkdi_type
qkdi_device
qkdi_port
qkdi_state
qkdi_link_stats_support
qkdn_locx
qkdn_locy`;

const qkdPhysLink = `phys_link_id
phys_link_type
phys_enable
local_qkdn_id
local_qkdi_id
remote_qkdn_id
remote_qkdi_id
phys_link_state
phys_wavelength
phys_expected_consumption
phys_skr
phys_eskr
phys_link_perf_type
phys_link_perf_value
qkeystore`;

const qkdVirtLink = `virt_link_id
virt_link_type
app_id
local_qkdn_id
remote_qkdn_id
num_of_candidate_paths
path_priority
phys_link_id
deploy_path_id
deply_phys_link_id
deploy_virt_link_state
virt_bandwidth
virt_expected_consumption
virt_skr
virt_eskr
path_recovery hold_off_timer
deploy_path_primary_id
deploy_path_secondary_id`;

const qkdService = `app_id
app_type
app_creation_time
app_expiration_time
app_state
app_priority
qos_max_bandwidth
qos_min_bandwidth
qos_jitter
qos_ttl
local_qkdn_id
local_qkdi_id
remote_qkdn_id
remote_qkdi_id
virt_link_id
app_agent_ip
app_agent_protocol
app_agent_port
app_interface_key_type
app_interface_key_code
app_interface_process_code
qkeystore`;

const qkdPhysLinkQkeyStore = `phys_link_id
maxKeyCount
maxKeyPreRequest
maxKeySize
minKeySize
defaultKeySize
keyRequestInterval
maxStoreRate
minStoreRate
crtStoreRate`;

const qkdServiceLinkQkeyStore = `app_link_id
maxKeyCount
maxKeyPreRequest
maxKeySize
minKeySize
defaultKeySize
keyRequestInterval
maxStoreRate
minStoreRate
crtStoreRate`;

console.log(
  getAddTypeString(getSnakeToCamel(qkdServiceLinkQkeyStore)).join(";\n")
);

console.log(getJsonObjectPutStatement(qkdNode));
