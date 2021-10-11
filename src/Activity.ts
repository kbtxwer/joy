import { GENERIC_JR_HOST, globalInfo, USER_AGENT } from "./constants";
import { get, getReqData, post } from "./utils";

export const toWithdraw = (cookie?: string) => {
    let { environment, eid, fp, channelLv, shareUuid } = globalInfo;
    let riskDeviceInfo = JSON.stringify({
        eid,
        fp
    });
    let signData = {
        channelLv,
        environment,
        riskDeviceInfo,
        shareUuid,
    };
    let reqData = getReqData(signData)
    let url = `${GENERIC_JR_HOST}toWithdraw?reqData=${reqData}`;
    let header = {
        "User-Agent": USER_AGENT,
        "Referer": "https://active.jd.com/",
        cookie
    };
    return get(url, header);
}


export const toGoldExchange = (cookie?: string) => {
    let { environment, eid, fp, channelLv, shareUuid } = globalInfo;
    let riskDeviceInfo = JSON.stringify({
        eid,
        fp
    });
    let signData = {
        channelLv,
        environment,
        riskDeviceInfo,
        shareUuid,
    };
    let reqData = getReqData(signData)
    let url = `${GENERIC_JR_HOST}toGoldExchange?reqData=${reqData}`;
    let header = {
        "User-Agent": USER_AGENT,
        "Referer": "https://active.jd.com/",
        cookie
    };
    return get(url, header);
}

export const toDailySignIn = (cookie?: string) => {
    let { environment, channelLv, shareUuid } = globalInfo;
    let signData = {
        channelLv,
        environment,
        shareUuid,
    };
    let reqData = getReqData(signData)
    let url = `${GENERIC_JR_HOST}toDailySignIn?reqData=${reqData}`;
    let header = {
        "User-Agent": USER_AGENT,
        "Referer": "https://active.jd.com/",
        cookie
    };
    return get(url, header);
}

export const toDailyHome = (cookie?: string) => {
    let { environment, eid, fp, channelLv, shareUuid } = globalInfo;
    let riskDeviceInfo = JSON.stringify({
        eid,
        fp
    });
    let signData = {
        riskDeviceInfo,
        channelLv,
        environment,
        shareUuid,
    };
    let reqData = getReqData(signData, false);
    let url = `${GENERIC_JR_HOST}toDailyHome?reqData=${reqData}`;
    let header = {
        "User-Agent": USER_AGENT,
        "Referer": "https://active.jd.com/",
        cookie
    };
    return get(url, header);
}



export const pigPetOpenBox = (cookie?: string) => {
    let t = Date.now();
    let reqData=JSON.stringify({ "source": 0, "channelLV": "yqs", "riskDeviceParam": "{}", "t": `${t}` });
    let url = `${GENERIC_JR_HOST}pigPetOpenBox?_=${t}`;
    let header = {
        "User-Agent": USER_AGENT,
        "Referer": "https://active.jd.com/",
        cookie,
        "Content-type": "application/x-www-form-urlencoded"
    };
    return post(url,{reqData}, header);
}