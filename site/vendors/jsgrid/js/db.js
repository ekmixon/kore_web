(function() {

    var db = {

        loadData: function(filter) {
            return $.grep(this.clients, function(client) {
                return (!filter.Alert || client.Alert.indexOf(filter.Alert) > -1)
                    && (!filter.Severity || client.Severity === filter.Severity)
                    && (!filter.Source || client.Source.indexOf(filter.Source) > -1)
                    && (!filter.Assignee || client.Assignee === filter.Assignee)
                    && (filter.Action === undefined || client.Action === filter.Action);
            });
        },

        insertItem: function(insertingClient) {
            this.clients.push(insertingClient);
        },

        updateItem: function(updatingClient) { },

        deleteItem: function(deletingClient) {
            var clientIndex = $.inArray(deletingClient, this.clients);
            this.clients.splice(clientIndex, 1);
        }

    };

    window.db = db;


    db.assignee = [
        { Name: "", Id: 0 },
        { Name: "David Justice", Id: 1 },
        { Name: "Fred McGriff", Id: 2 },
        { Name: "Kenny Lofton", Id: 3 },
        { Name: "Greg Maddox", Id: 4 },
        { Name: "Steve Avery", Id: 5 },
        { Name: "John Schmultz", Id: 6 },
        { Name: "Andrew Jones", Id: 7 }
    ];

    db.clients = [
        {
            "Alert": "Microsoft Updates for Multiple Vulnerabilities",
            "Severity": 56,
            "Assignee": 7,
            "Source": "SNORT",
            "Action": true
    },
        {
            "Alert": "Microsoft Updates for Multiple Vulnerabilities",
            "Severity": 59,
            "Assignee": 7,
            "Source": "TACACS",
            "Action": false
        },
        {
            "Alert": "Wi-Fi Protected Setup (WPS) Vulnerable to Brute-Force Attack",
            "Severity": 61,
            "Assignee": 2,
            "Source": "Nexpose",
            "Action": true
        },
        {
            "Alert": "Oracle Java Multiple Vulnerabilities",
            "Severity": 12,
            "Assignee": 3,
            "Source": "BRO",
            "Action": true
        },
        {
            "Alert": "Risks of Using the Intelligent Platform Management Interface (IPMI)",
            "Severity": 75,
            "Assignee": 4,
            "Source": "SNORT",
            "Action": false
        },
        {
            "Alert": "Malware Targeting Point of Sale Systems",
            "Severity": 90,
            "Assignee": 6,
            "Source": "Accunetix",
            "Action": true
        },
        {
            "Alert": "Securing End-to-End Communications",
            "Severity": 45,
            "Assignee": 6,
            "Source": "Tanium",
            "Action": true
        },
        {
            "Alert": "The Increasing Threat to Network Infrastructure Devices and Recommended Mitigations",
            "Severity": 73,
            "Assignee": 3,
            "Source": "Accunetix",
            "Action": true
        },
        {
            "Alert": "Top 30 Targeted High Risk Vulnerabilities",
            "Severity": 17,
            "Assignee": 6,
            "Source": "BRO",
            "Action": false
        },
        {
            "Alert": "UDP-Based Amplification Attacks",
            "Severity": 53,
            "Assignee": 3,
            "Source": "TACACS",
            "Action": false
        },
        {
            "Alert": "Microsoft Updates for Multiple Vulnerabilities",
            "Severity": 41,
            "Assignee": 1,
            "Source": "Accunetix",
            "Action": false
        },
        {
            "Alert": "Microsoft Updates for Multiple Vulnerabilities",
            "Severity": 53,
            "Assignee": 1,
            "Source": "Tanium",
            "Action": true
        },
        {
            "Alert": "Microsoft Secure Channel (Schannel) Vulnerability (CVE-2014-6321)",
            "Severity": 31,
            "Assignee": 5,
            "Source": "TACACS",
            "Action": true
        },
        {
            "Alert": "Microsoft Ending Support for Windows XP and Office 2003",
            "Severity": 62,
            "Assignee": 6,
            "Source": "domain controller logs",
            "Action": true
        },
        {
            "Alert": "Microsoft Updates for Multiple Vulnerabilities",
            "Severity": 86,
            "Assignee": 7,
            "Source": "Nexpose",
            "Action": true
        },
        {
            "Alert": "Microsoft Updates for Multiple Vulnerabilities",
            "Severity": 79,
            "Assignee": 4,
            "Source": "BRO",
            "Action": true
        },
        {
            "Alert": "Crypto Ransomware",
            "Severity": 67,
            "Assignee": 7,
            "Source": "BRO",
            "Action": true
        },
        {
            "Alert": "Microsoft XML Core Services Attack Activity",
            "Severity": 93,
            "Assignee": 1,
            "Source": "Nexpose",
            "Action": false
        },
        {
            "Alert": "Exploitation of SAP Business Applications",
            "Severity": 72,
            "Assignee": 1,
            "Source": "SNORT",
            "Action": false
        },
        {
            "Alert": "Microsoft Updates for Multiple Vulnerabilities",
            "Severity": 74,
            "Assignee": 2,
            "Source": "Accunetix",
            "Action": true
        },
        {
            "Alert": "Lenovo Superfish Adware Vulnerable to HTTPS Spoofing",
            "Severity": 47,
            "Assignee": 6,
            "Source": "BRO",
            "Action": true
        },
        {
            "Alert": "Adobe Updates for Multiple Vulnerabilities",
            "Severity": 0,
            "Assignee": 2,
            "Source": "BRO",
            "Action": true
        },
        {
            "Alert": "Compromised Web Servers and Web Shells - Threat Awareness and Guidance",
            "Severity": 38,
            "Assignee": 3,
            "Source": "TACACS",
            "Action": true
        },
        {
            "Alert": "Petya Ransomware",
            "Severity": 20,
            "Assignee": 4,
            "Source": "BRO",
            "Action": false
        },
        {
            "Alert": "Apple Ends Support for QuickTime for Windows; New Vulnerabilities Announced",
            "Severity": 20,
            "Assignee": 7,
            "Source": "Nexpose",
            "Action": false
        },
        {
            "Alert": "Microsoft Updates for Multiple Vulnerabilities",
            "Severity": 3,
            "Assignee": 1,
            "Source": "TACACS",
            "Action": false
        },
        {
            "Alert": "Microsoft Updates for Multiple Vulnerabilities",
            "Severity": 79,
            "Assignee": 3,
            "Source": "Accunetix",
            "Action": false
        },
        {
            "Alert": "Microsoft Updates for Multiple Vulnerabilities",
            "Severity": 39,
            "Assignee": 2,
            "Source": "Accunetix",
            "Action": false
        },
        {
            "Alert": "Microsoft Ending Support for Windows Server 2003 Operating System",
            "Severity": 88,
            "Assignee": 4,
            "Source": "Nexpose",
            "Action": true
        },
        {
            "Alert": "Microsoft Updates for Multiple Vulnerabilities",
            "Severity": 66,
            "Assignee": 7,
            "Source": "TACACS",
            "Action": true
        },
        {
            "Alert": "Symantec and Norton Security Products Contain Critical Vulnerabilities",
            "Severity": 59,
            "Assignee": 2,
            "Source": "Nexpose",
            "Action": true
        },
        {
            "Alert": "Oracle Has Released Multiple Updates for Java SE",
            "Severity": 9,
            "Assignee": 3,
            "Source": "SNORT",
            "Action": true
        },
        {
            "Alert": "Targeted Destructive Malware",
            "Severity": 75,
            "Assignee": 3,
            "Source": "SNORT",
            "Action": false
        },
        {
            "Alert": "HTTPS Interception Weakens TLS Security",
            "Severity": 66,
            "Assignee": 5,
            "Source": "Tanium",
            "Action": false
        },
        {
            "Alert": "Compromised Web Servers and Web Shells - Threat Awareness and Guidance",
            "Severity": 47,
            "Assignee": 1,
            "Source": "Tanium",
            "Action": false
        },
        {
            "Alert": "DNS Zone Transfer AXFR Requests May Leak Domain Information",
            "Severity": 76,
            "Assignee": 5,
            "Source": "domain controller logs",
            "Action": true
        },
        {
            "Alert": "Microsoft Updates for Multiple Vulnerabilities",
            "Severity": 2,
            "Assignee": 1,
            "Source": "domain controller logs",
            "Action": true
        },
        {
            "Alert": "HIDDEN COBRA - North Korean Trojan: Volgmer",
            "Severity": 27,
            "Assignee": 3,
            "Source": "TACACS",
            "Action": true
        },
        {
            "Alert": "DNS Amplification Attacks",
            "Severity": 12,
            "Assignee": 1,
            "Source": "Tanium",
            "Action": true
        },
        {
            "Alert": "CrashOverride Malware",
            "Severity": 80,
            "Assignee": 1,
            "Source": "BRO",
            "Action": true
        },
        {
            "Alert": "Recent Email Phishing Campaigns - Mitigation and Response Recommendations",
            "Severity": 6,
            "Assignee": 7,
            "Source": "SNORT",
            "Action": true
        },
        {
            "Alert": "Microsoft Updates for Multiple Vulnerabilities",
            "Severity": 82,
            "Assignee": 5,
            "Source": "domain controller logs",
            "Action": false
        },
        {
            "Alert": "Apple Ends Support for QuickTime for Windows; New Vulnerabilities Announced",
            "Severity": 48,
            "Assignee": 7,
            "Source": "SNORT",
            "Action": true
        },
        {
            "Alert": "Microsoft Update For Minimum Certificate Key Length",
            "Severity": 39,
            "Assignee": 5,
            "Source": "TACACS",
            "Action": true
        },
        {
            "Alert": "Microsoft Windows OLE Automation Array Remote Code Execution Vulnerability",
            "Severity": 65,
            "Assignee": 1,
            "Source": "Tanium",
            "Action": true
        },
        {
            "Alert": "Intrusions Affecting Multiple Victims Across Multiple Sectors",
            "Severity": 83,
            "Assignee": 1,
            "Source": "Tanium",
            "Action": false
        },
        {
            "Alert": "Microsoft Updates for Multiple Vulnerabilities",
            "Severity": 92,
            "Assignee": 4,
            "Source": "TACACS",
            "Action": false
        },
        {
            "Alert": "CryptoLocker Ransomware Infections",
            "Severity": 14,
            "Assignee": 3,
            "Source": "domain controller logs",
            "Action": true
        },
        {
            "Alert": "Meltdown and Spectre Side-Channel Vulnerability Guidance",
            "Severity": 45,
            "Assignee": 5,
            "Source": "BRO",
            "Action": true
        },
        {
            "Alert": "Microsoft XML Core Services Attack Activity",
            "Severity": 1,
            "Assignee": 1,
            "Source": "BRO",
            "Action": true
        },
        {
            "Alert": "Microsoft Updates for Multiple Vulnerabilities",
            "Severity": 69,
            "Assignee": 7,
            "Source": "TACACS",
            "Action": false
        },
        {
            "Alert": "Oracle Has Released Multiple Updates for Java SE",
            "Severity": 38,
            "Assignee": 4,
            "Source": "BRO",
            "Action": false
        },
        {
            "Alert": "Microsoft Releases Patch for Internet Explorer Exploit",
            "Severity": 61,
            "Assignee": 1,
            "Source": "BRO",
            "Action": true
        },
        {
            "Alert": "GNU Bourne-Again Shell (Bash) `Shellshock' Vulnerability (CVE-2014-6271, CVE-2014-7169, CVE-2014-7186, CVE-2014-7187, CVE-2014-6277 and CVE 2014-6278)",
            "Severity": 93,
            "Assignee": 6,
            "Source": "BRO",
            "Action": true
        },
        {
            "Alert": "Microsoft Windows OLE Automation Array Remote Code Execution Vulnerability",
            "Severity": 80,
            "Assignee": 5,
            "Source": "SNORT",
            "Action": false
        },
        {
            "Alert": "DNS Zone Transfer AXFR Requests May Leak Domain Information",
            "Severity": 66,
            "Assignee": 6,
            "Source": "domain controller logs",
            "Action": false
        },
        {
            "Alert": "Microsoft Updates for Multiple Vulnerabilities",
            "Severity": 21,
            "Assignee": 2,
            "Source": "TACACS",
            "Action": true
        },
        {
            "Alert": "HIDDEN COBRA - North Korean Trojan: Volgmer",
            "Severity": 34,
            "Assignee": 6,
            "Source": "SNORT",
            "Action": true
        },
        {
            "Alert": "Microsoft Updates for Multiple Vulnerabilities",
            "Severity": 90,
            "Assignee": 3,
            "Source": "TACACS",
            "Action": true
        },
        {
            "Alert": "Microsoft Updates for Multiple Vulnerabilities",
            "Severity": 31,
            "Assignee": 5,
            "Source": "domain controller logs",
            "Action": true
        },
        {
            "Alert": "Meltdown and Spectre Side-Channel Vulnerability Guidance",
            "Severity": 12,
            "Assignee": 5,
            "Source": "Nexpose",
            "Action": true
        },
        {
            "Alert": "Meltdown and Spectre Side-Channel Vulnerability Guidance",
            "Severity": 28,
            "Assignee": 5,
            "Source": "BRO",
            "Action": true
        },
        {
            "Alert": "Microsoft Updates for Multiple Vulnerabilities",
            "Severity": 30,
            "Assignee": 7,
            "Source": "TACACS",
            "Action": true
        },
        {
            "Alert": "AAEH",
            "Severity": 36,
            "Assignee": 3,
            "Source": "Accunetix",
            "Action": true
        },
        {
            "Alert": "WPAD Name Collision Vulnerability",
            "Severity": 81,
            "Assignee": 4,
            "Source": "TACACS",
            "Action": true
        },
        {
            "Alert": "Indicators Associated With WannaCry Ransomware",
            "Severity": 71,
            "Assignee": 6,
            "Source": "Accunetix",
            "Action": false
        },
        {
            "Alert": "Microsoft Secure Channel (Schannel) Vulnerability (CVE-2014-6321)",
            "Severity": 53,
            "Assignee": 2,
            "Source": "SNORT",
            "Action": true
        },
        {
            "Alert": "Microsoft Releases Update for Internet Explorer Vulnerability CVE-2012-4792",
            "Severity": 88,
            "Assignee": 4,
            "Source": "domain controller logs",
            "Action": false
        },
        {
            "Alert": "Apple Ends Support for QuickTime for Windows; New Vulnerabilities Announced",
            "Severity": 53,
            "Assignee": 7,
            "Source": "Accunetix",
            "Action": false
        },
        {
            "Alert": "CryptoLocker Ransomware Infections",
            "Severity": 87,
            "Assignee": 3,
            "Source": "Accunetix",
            "Action": true
        },
        {
            "Alert": "The Increasing Threat to Network Infrastructure Devices and Recommended Mitigations",
            "Severity": 15,
            "Assignee": 1,
            "Source": "BRO",
            "Action": true
        },
        {
            "Alert": "Microsoft Updates for Multiple Vulnerabilities",
            "Severity": 60,
            "Assignee": 1,
            "Source": "Tanium",
            "Action": true
        },
        {
            "Alert": "Microsoft Releases Update for Internet Explorer Vulnerability CVE-2012-4792",
            "Severity": 2,
            "Assignee": 2,
            "Source": "SNORT",
            "Action": false
        },
        {
            "Alert": "Risks of Using the Intelligent Platform Management Interface (IPMI)",
            "Severity": 75,
            "Assignee": 4,
            "Source": "SNORT",
            "Action": true
        },
        {
            "Alert": "WPAD Name Collision Vulnerability",
            "Severity": 30,
            "Assignee": 6,
            "Source": "TACACS",
            "Action": true
        },
        {
            "Alert": "Microsoft Updates for Multiple Vulnerabilities",
            "Severity": 9,
            "Assignee": 3,
            "Source": "Nexpose",
            "Action": false
        },
        {
            "Alert": "Apple iOS 'Masque Attack' Technique",
            "Severity": 30,
            "Assignee": 2,
            "Source": "SNORT",
            "Action": false
        },
        {
            "Alert": "Adobe Updates for Multiple Vulnerabilities",
            "Severity": 74,
            "Assignee": 5,
            "Source": "BRO",
            "Action": true
        },
        {
            "Alert": "Microsoft Releases Patch for Internet Explorer Exploit",
            "Severity": 95,
            "Assignee": 1,
            "Source": "Nexpose",
            "Action": true
        },
        {
            "Alert": "Microsoft Security Advisory for Internet Explorer Exploit",
            "Severity": 14,
            "Assignee": 3,
            "Source": "SNORT",
            "Action": false
        },
        {
            "Alert": "Top 30 Targeted High Risk Vulnerabilities",
            "Severity": 98,
            "Assignee": 5,
            "Source": "domain controller logs",
            "Action": false
        },
        {
            "Alert": "GameOver Zeus P2P Malware",
            "Severity": 36,
            "Assignee": 2,
            "Source": "BRO",
            "Action": false
        },
        {
            "Alert": "Russian Government Cyber Activity Targeting Energy and Other Critical Infrastructure Sectors",
            "Severity": 32,
            "Assignee": 3,
            "Source": "Accunetix",
            "Action": false
        },
        {
            "Alert": "Microsoft Releases Patch for Internet Explorer Exploit",
            "Severity": 16,
            "Assignee": 7,
            "Source": "SNORT",
            "Action": true
        },
        {
            "Alert": "CryptoLocker Ransomware Infections",
            "Severity": 17,
            "Assignee": 2,
            "Source": "Nexpose",
            "Action": false
        },
        {
            "Alert": "Targeted Destructive Malware",
            "Severity": 33,
            "Assignee": 1,
            "Source": "Tanium",
            "Action": false
        },
        {
            "Alert": "Microsoft Updates for Multiple Vulnerabilities",
            "Severity": 99,
            "Assignee": 3,
            "Source": "BRO",
            "Action": false
        },
        {
            "Alert": "Adobe Reader and Acrobat Security Updates and Architectural Improvements",
            "Severity": 66,
            "Assignee": 4,
            "Source": "TACACS",
            "Action": true
        },
        {
            "Alert": "Microsoft Updates for Multiple Vulnerabilities",
            "Severity": 58,
            "Assignee": 7,
            "Source": "domain controller logs",
            "Action": true
        },
        {
            "Alert": "Adobe Updates for Multiple Vulnerabilities",
            "Severity": 80,
            "Assignee": 1,
            "Source": "TACACS",
            "Action": true
        },
        {
            "Alert": "Top 30 Targeted High Risk Vulnerabilities",
            "Severity": 35,
            "Assignee": 2,
            "Source": "SNORT",
            "Action": true
        },
        {
            "Alert": "AAEH",
            "Severity": 82,
            "Assignee": 5,
            "Source": "domain controller logs",
            "Action": true
        },
        {
            "Alert": "Oracle Updates for Multiple Vulnerabilities",
            "Severity": 12,
            "Assignee": 5,
            "Source": "Tanium",
            "Action": true
        },
        {
            "Alert": "Simda Botnet",
            "Severity": 33,
            "Assignee": 6,
            "Source": "Tanium",
            "Action": false
        },
        {
            "Alert": "Microsoft Updates for Multiple Vulnerabilities",
            "Severity": 86,
            "Assignee": 1,
            "Source": "Accunetix",
            "Action": false
        },
        {
            "Alert": "Microsoft Releases Patch for Internet Explorer Exploit",
            "Severity": 23,
            "Assignee": 3,
            "Source": "Accunetix",
            "Action": true
        },
        {
            "Alert": "Oracle Has Released Multiple Updates for Java SE",
            "Severity": 71,
            "Assignee": 3,
            "Source": "TACACS",
            "Action": false
        },
        {
            "Alert": "GNU Bourne-Again Shell (Bash) `Shellshock' Vulnerability (CVE-2014-6271, CVE-2014-7169, CVE-2014-7186, CVE-2014-7187, CVE-2014-6277 and CVE 2014-6278)",
            "Severity": 35,
            "Assignee": 6,
            "Source": "Nexpose",
            "Action": false
        },
        {
            "Alert": "The Increasing Threat to Network Infrastructure Devices and Recommended Mitigations",
            "Severity": 57,
            "Assignee": 3,
            "Source": "TACACS",
            "Action": false
        }
        ]
}());