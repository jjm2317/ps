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
const qkdVirtLinkV2 = `virt_link_id
virt_link_type
app_id
local_qkdn_id
remote_qkdn_id
num_of_candidate_paths
path
deploy_path_id
deply_phys_link_id
deploy_virt_link_state
performance
virt_link_prop
path_recovery hold_off_timer
path_recovery_mode
primaryUsage
primaryFault
secondaryUsage
secondaryFault`;

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
virt_link_id`;

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

const qkdUiLinkbook = `group_nm
sec_start
sec_end
start_ne_name
end_ne_name
line_id
original_service_name
service_name
display_name
service_type
vendor
protection_kind
line_capa
e_consumption_external
e_consumption_internal
key_status_start
key_status_end
key_req_interval
path_recovery_mode
path_recovery_hold_off_timer
protection_status
active_state
is_home_path
latency
app_creation_time
app_expiration_time
noc_line_id
user_id
line_comment
st_vs_system_name
st_vs_management_team
st_vs_manufacture_company
st_vs_station_name
st_vs_node_name
st_vs_unit
st_vs_shelf
st_vs_slot
st_vs_port
st_vs_fdf
st_vs_kms_nb_ip
st_tc_system_name
st_tc_management_team
st_tc_manufacture_company
st_tc_station_name
st_tc_node_name
st_tc_unit
st_tc_port
st_tc_kms_sb_ip
st_ln_system_name
st_ln_management_team
st_ln_manufacture_company
st_ln_station_name
st_ln_node_name
st_ln_unit
st_ln_shelf
st_ln_slot
st_ln_port
st_ln_fdf
ed_ln_system_name
ed_ln_management_team
ed_ln_manufacture_company
ed_ln_station_name
ed_ln_node_name
ed_ln_unit
ed_ln_shelf
ed_ln_slot
ed_ln_port
ed_ln_fdf
ed_tc_system_name
ed_tc_management_team
ed_tc_manufacture_company
ed_tc_station_name
ed_tc_node_name
ed_tc_unit
ed_tc_port
ed_tc_fdf
ed_tc_kms_sb_ip
ed_vs_system_name
ed_vs_management_team
ed_vs_manufacture_company
ed_vs_station_name
ed_vs_node_name
ed_vs_unit
ed_vs_shelf
ed_vs_slot
ed_vs_port
ed_vs_fdf
ad_vs_kms_nb_ip
main_path 
bypass_path`;
console.log(
  getAddTypeString(getSnakeToCamel(qkdUiLinkbook))
    .map((field) => `@Column(length = 30)\n${field};`)
    .join("\n")
);

// console.log(getJsonObjectPutStatement(qkdService));

const arrData = [
  [10020, "강서", null, null, "SKB", false, "A20448"],
  [10021, "강진", null, null, "SKB", false, "N26949"],
  [10028, "계양", null, null, "SKB", false, "M90631"],
  [10029, "고령T", null, null, "SKB", false, "N40714"],
  [10035, "공주", null, null, "SKB", false, "N28909"],
  [10036, "광명", null, null, "SKB", false, "N00860"],
  [10042, "구리", null, null, "SKB", false, "M90634"],
  [10043, "구미", null, null, "SKB", false, "N09240"],
  [10046, "군산", null, null, "SKB", false, "N09246"],
  [10048, "군포", null, null, "SKB", false, "N04114"],
  [10051, "김천", null, null, "SKB", false, "N16814"],
  [10053, "김포", null, null, "SKB", false, "N00937"],
  [10054, "김해", null, null, "SKB", false, "N24784"],
  [10064, "당진", null, null, "SKB", false, "N27189"],
  [10071, "덕양", null, null, "SKB", false, "N00945"],
  [10074, "동작", null, null, "SKB", false, "M90643"],
  [10078, "마산", null, null, "SKB", false, "N02138"],
  [10079, "목포", null, null, "SKB", false, "N15592"],
  [10082, "밀양", null, null, "SKB", false, "N21484"],
  [10083, "보령", null, null, "SKB", false, "N28910"],
  [10091, "부천", null, null, "SKB", false, "C10202"],
  [10094, "사상", null, null, "SKB", false, "N04458"],
  [10159, "용인", null, null, "SKB", false, "M85247"],
  [10164, "웅상", null, null, "SKB", false, "N17323"],
  [10165, "원주", null, null, "SKB", false, "N26981"],
  [10170, "이천", null, null, "SKB", false, "N13423"],
  [10171, "익산", null, null, "SKB", false, "N09233"],
  [10173, "일산", null, null, "SKB", false, "M90670"],
  [10176, "장안", null, null, "SKB", false, "N00938"],
  [10182, "정관", null, null, "SKB", false, "N33069"],
  [10160, "울산남", null, null, "SKB", false, "N00974"],
  [10161, "울산동", null, null, "SKB", false, "D10201"],
  [10162, "울산북", null, null, "SKB", false, "N35986"],
  [10169, "의정부", null, null, "SKB", false, "M90667"],
  [10180, "전주덕진", null, null, "SKB", false, "N24228"],
  [10181, "전주완산", null, null, "SKB", false, "N03039"],
  [10158, "왜관T", null, null, "SKB", false, "M64834"],
  [10166, "음성T", null, null, "SKB", false, "N41160"],
  [10172, "인제T", null, null, "SKB", false, "N18010"],
  [10197, "진천T", null, null, "SKB", false, "N47400"],
  [10198, "진해T", null, null, "SKB", false, "N64217"],
  [10163, "울진온양T", null, null, "SKB", false, "N35494"],
  [10167, "음성혁신T", null, null, "SKB", false, "N41186"],
  [10174, "임실중심국", null, null, "SKB", false, null],
  [10168, "의성중심국", null, null, "SKB", false, null],
  [10177, "장유", null, null, "SKB", false, null],
  [10157, "완도중심국", null, null, "SKB", false, null],
  [10179, "전남장성중심국", null, null, "SKB", false, null],
  [10178, "장흥중심국", null, null, "SKB", false, null],
  [10175, "장수개정기지국", null, null, "SKB", false, null],
  [10184, "정읍", null, null, "SKB", false, "N27796"],
  [10189, "종로", null, null, "SKB", false, "A30302"],
  [10190, "중동", null, null, "SKB", false, "N28828"],
  [10191, "중원", null, null, "SKB", false, "N07143"],
  [10192, "증평", null, null, "SKB", false, "W24394"],
  [10187, "제주호근", null, null, "SKB", false, "N34676"],
  [10183, "정선T", null, null, "SKB", false, "N70894"],
  [10186, "제주일도T", null, null, "SKB", false, "N02749"],
  [10195, "진주인사T", null, null, "SKB", false, "M80288"],
  [10196, "진주하대T", null, null, "SKB", false, "N41009"],
  [10185, "제주교환국T", null, null, "SKB", false, "M32600"],
  [10188, "제천T", null, null, "SKB", false, null],
  [10194, "진안중심국", null, null, "SKB", false, null],
  [10193, "진도중심국", null, null, "SKB", false, null],
  [10019, "강남", null, null, "SKB", false, "M90626"],
  [10015, "강릉", "강릉", "중부권", "SKB", false, "N16498"],
  [10037, "광양", null, null, "SKB", false, "N09029"],
  [10049, "금산", null, null, "SKB", false, "N02055"],
  [10060, "노원", null, null, "SKB", false, "A40202"],
  [10075, "동탄", null, null, "SKB", false, "N26252"],
  [10077, "동해", null, null, "SKB", false, "N16497"],
  [10223, "하동T", null, null, "SKB", false, "N31701"],
  [10220, "포항장성T", null, null, "SKB", false, "M19475"],
  [10221, "포항청림T", null, null, "SKB", false, "N35504"],
  [10222, "하남미사T", null, null, "SKB", false, "N38764"],
  [10030, "고성중심국", null, null, "SKB", false, null],
  [10225, "함안중심국", null, null, "SKB", false, null],
  [10229, "합천중심국", null, null, "SKB", false, null],
  [10024, "거창중심국", null, null, "SKB", false, null],
  [10141, "여주", null, null, "SKB", false, null],
  [10088, "부안중심국", null, null, "SKB", false, null],
  [10085, "보성중심국", null, null, "SKB", false, null],
  [10154, "오창T", null, null, "SKB", false, null],
  [10207, "청송중심국", null, null, "SKB", false, null],
  [10156, "완도읍내기지국", null, null, "SKB", false, null],
  [10022, "강화기지국", null, null, "SKB", false, null],
  [10070, "대청T", null, null, "SKB", false, null],
  [10138, "양평중심국", null, null, "SKB", false, null],
  [10031, "고창중심국", null, null, "SKB", false, null],
  [10098, "산청중심국", null, null, "SKB", false, null],
  [10017, "가평기지국", null, null, "SKB", false, null],
  [10226, "함양중심국", null, null, "SKB", false, null],
  [10240, "효돈기지국", null, null, "SKB", false, null],
  [10115, "성주중심국", null, null, "SKB", false, null],
  [10063, "담양중심국", null, null, "SKB", false, null],
  [10093, "분당IDC", null, null, "SKB", false, null],
  [10095, "사천", null, null, "SKB", false, "N30987"],
  [10101, "상주", null, null, "SKB", false, "N19240"],
  [10103, "서산", null, null, "SKB", false, "N25637"],
  [10105, "서초", null, null, "SKB", false, "M90651"],
  [10106, "성북", null, null, "SKB", false, "M90655"],
  [10116, "세종", null, null, "SKB", false, "M26122"],
  [10119, "속초", null, null, "SKB", false, "N16496"],
  [10120, "송파", null, null, "SKB", false, "M90658"],
  [10147, "영양중심국", null, null, "SKB", false, null],
  [10205, "청도중심국", null, null, "SKB", false, null],
  [10080, "무주중심국", null, null, "SKB", false, null],
  [10047, "군위중심국", null, null, "SKB", false, null],
  [10124, "순창중심국", null, null, "SKB", false, null],
  [10239, "횡성중심국", null, null, "SKB", false, null],
  [10066, "대구중", null, null, "SKB", false, "N11092"],
  [10200, "창원", null, null, "SKB", false, "M90673"],
  [10203, "천안", null, null, "SKB", false, "N24381"],
  [10204, "철원", null, null, "SKB", false, "N17245"],
  [10208, "청주", null, null, "SKB", false, "N18816"],
  [10209, "춘천", null, null, "SKB", false, "N16495"],
  [10210, "충주", null, null, "SKB", false, "N14151"],
  [10211, "칠곡", null, null, "SKB", false, "N02863"],
  [10219, "포항", null, null, "SKB", false, "N09869"],
  [10057, "남양주", null, null, "SKB", false, "N05998"],
  [10068, "대전서", null, null, "SKB", false, "N70669"],
  [10069, "대전중", null, null, "SKB", false, "N14560"],
  [10073, "동대문", null, null, "SKB", false, "N01340"],
  [10121, "수성", null, null, "SKB", false, "N01833"],
  [10125, "순천", null, null, "SKB", false, "N26840"],
  [10126, "시화", null, null, "SKB", false, "N77625"],
  [10127, "시흥", null, null, "SKB", false, "W10804"],
  [10131, "아산", null, null, "SKB", false, "N14191"],
  [10132, "안동", null, null, "SKB", false, "N16812"],
  [10133, "안산", null, null, "SKB", false, "M90663"],
  [10135, "안성", null, null, "SKB", false, "N16809"],
  [10136, "안양", null, null, "SKB", false, "N75563"],
  [10137, "양산", null, null, "SKB", false, "N12225"],
  [10143, "연수", null, null, "SKB", false, "C10201"],
  [10150, "영천", null, null, "SKB", false, "N19241"],
  [10102, "서대문", null, null, "SKB", false, "M90650"],
  [10140, "여의도", null, null, "SKB", false, "N68998"],
  [10146, "영등포", null, null, "SKB", false, "A20302"],
  [10231, "해운대", null, null, "SKB", false, "N02134"],
  [10025, "경기광주", null, null, "SKB", false, "N24424"],
  [10038, "광주광산", null, null, "SKB", false, "N26849"],
  [10039, "광주동구", null, null, "SKB", false, "N14343"],
  [10040, "광주북구", null, null, "SKB", false, "N14306"],
  [10065, "대구달서", null, null, "SKB", false, "M90639"],
  [10067, "대전관저", null, null, "SKB", false, "N08309"],
  [10087, "부산연제", null, null, "SKB", false, "N15024"],
  [10122, "수원팔달", null, null, "SKB", false, "M90659"],
  [10016, "가평", null, null, "SKB", false, "N30576"],
  [10018, "각산T", null, null, "SKB", false, "N81890"],
  [10023, "거제T", null, null, "SKB", false, "N37750"],
  [10027, "경주T", null, null, "SKB", false, "N16804"],
  [10034, "곡성T", null, null, "SKB", false, "N40375"],
  [10041, "구례T", null, null, "SKB", false, "N08370"],
  [10044, "구서T", null, null, "SKB", false, "N91978"],
  [10045, "구암T", null, null, "SKB", false, "M41332"],
  [10050, "김제T", null, null, "SKB", false, "N34125"],
  [10055, "나주T", null, null, "SKB", false, "N30561"],
  [10056, "남동T", null, null, "SKB", false, "M90669"],
  [10058, "남원T", null, null, "SKB", false, "N39331"],
  [10059, "내포T", null, null, "SKB", false, "M62986"],
  [10062, "논현T", null, null, "SKB", false, "N60004"],
  [10072, "덕천T", null, null, "SKB", false, "M15398"],
  [10081, "문경T", null, null, "SKB", false, "N40688"],
  [10086, "봉화T", null, null, "SKB", false, "N49663"],
  [10089, "부암T", null, null, "SKB", false, "B20D01"],
  [10090, "부여T", null, null, "SKB", false, "N41318"],
  [10096, "사하T", null, null, "SKB", false, "N83552"],
  [10097, "산격T", null, null, "SKB", false, "M01986"],
  [10099, "산포T", null, null, "SKB", false, "M28516"],
  [10100, "삼척T", null, null, "SKB", false, "N41329"],
  [10110, "서천T", null, null, "SKB", false, "N41453"],
  [10113, "성수T", null, null, "SKB", false, "N10891"],
  [10117, "세종T", null, null, "SKB", false, "M26122"],
  [10118, "센텀T", null, null, "SKB", false, "N29057"],
  [10123, "수지T", null, null, "SKB", false, "M85249"],
  [10129, "신천T", null, null, "SKB", false, "N41106"],
  [10130, "신호T", null, null, "SKB", false, "M32395"],
  [10139, "여수T", null, null, "SKB", false, "N09442"],
  [10144, "영광T", null, null, "SKB", false, "N05871"],
  [10145, "영덕T", null, null, "SKB", false, "N35495"],
  [10148, "영월T", null, null, "SKB", false, "N31947"],
  [10149, "영주T", null, null, "SKB", false, "N39674"],
  [10151, "예산T", null, null, "SKB", false, "N35091"],
  [10152, "예천T", null, null, "SKB", false, "N40621"],
  [10153, "오산T", null, null, "SKB", false, "N37847"],
  [10155, "옥천T", null, null, "SKB", false, "N53567"],
  [10199, "창녕T", null, null, "SKB", false, "N31650"],
  [10202, "처인T", null, null, "SKB", false, "N84037"],
  [10212, "태백T", null, null, "SKB", false, "N30810"],
  [10213, "태안T", null, null, "SKB", false, "W00719"],
  [10214, "통영T", null, null, "SKB", false, "N37749"],
  [10215, "파주", null, null, "SKB", false, "N14245"],
  [10216, "평창T", null, null, "SKB", false, "M72705"],
  [10217, "평택", null, null, "SKB", false, "N13351"],
  [10218, "포천T", null, null, "SKB", false, "N21381"],
  [10227, "함평T", null, null, "SKB", false, "N34804"],
  [10230, "해남T", null, null, "SKB", false, "N17424"],
  [10232, "현풍T", null, null, "SKB", false, "N83643"],
  [10233, "호산T", null, null, "SKB", false, "N83642"],
  [10234, "홍성T", null, null, "SKB", false, "N07675"],
  [10235, "홍천T", null, null, "SKB", false, "N26322"],
  [10238, "화천T", null, null, "SKB", false, "N37274"],
  [10026, "경북도청T", null, null, "SKB", false, "M70313"],
  [10033, "고흥남계T", null, null, "SKB", false, "N54346"],
  [10052, "김천통합T", null, null, "SKB", false, "M74885"],
  [10061, "논산취암T", null, null, "SKB", false, "N61569"],
  [10201, "창원중앙T", null, null, "SKB", false, "W37336"],
  [10224, "하양금락T", null, null, "SKB", false, "N35586"],
  [10236, "화성팔탄T", null, null, "SKB", false, "N28931"],
  [10237, "화순통합T", null, null, "SKB", false, "W36109"],
];

let sorted = arrData.sort((left, right) => left[0] - right[0]).map((v) => v[0]);

const count = Array.from({ length: 50000 }, (v) => 0);

sorted.forEach((item) => (count[item] += 1));

// console.log(count.filter((v) => v > 1).length);
