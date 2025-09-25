// backend/utils/googleSheet.js
// const { google } = require("googleapis");

// ✅ Use environment variable for sheet ID
// const SHEET_ID = process.env.GOOGLE_SHEET_ID;
// if (!SHEET_ID) throw new Error("⚠️ GOOGLE_SHEET_ID is missing in .env");

// ✅ Use credentials object directly
// const credentials = {
//     type: "service_account",
//     project_id: "navkar-bhavsar",
//     private_key_id: "5df4b5fb9cad6ae5334c9593b6e371f1eac1ead2",
//     private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQD3z1WX11rhcVUU\np2BBhc2Pb0plVT+ddHeplj5MYiQ6RMI3pDEjJRGnOJVOmjtSwwED7I1IOkLB5IaN\nVNR0V88SOcOs8di/6Udm5ynK+I6z9HpswNIKQ2ZvEf/+o5xMgARb3chqZzNqXSTE\nmEXGIT7CxrwzTfQ+u/Dm0L1ti1/zTXE8fKl4b2B2e3Iu5V6xqufF+S4kM9uEajJP\n2CfL4nW4DO09jPmw/Kh0mDfB7m/geS+lkkdwISZpyImGRTQJtC2qpsNPE7HMzGVH\nNj7QwXq7ZfNV3L2QR9tgFZXqbfwLlGFhwJ4rXJBptZnPZZL68mTWciXNq/k8yuE5\nBKjWG5d3AgMBAAECggEASvZ0TP9/ZW00MJBFROzl9vrShX7ZRJdDz5A8fjy9+sZr\n/gr0Nk5zXaN3PxTW1z1YJEi9oFjHcwHfVgeQUTVy1W+V6s4qJDu8Nru838J64KMX\nGajmoOYsqXLHfs8da+LZ7rRTeSSI4CcXBUWO7dWGt8MIkXiGZyfRQvFoLCgaOW3e\navWV3Bzi5iDGNOzH3xEkUXWaq+AdHxm4EAkqmjVEDHkM7Diw01h7GPayWhiLE6KU\nMbw/qyZrBqUDlgoimse9zGlcL5tFiZIPZEwCrk/4FGyW+vTzmm5WSrTRrsxzUw3A\n6y1NjqcYCUeFpwZ7kcA+CVy9mpiXZ2C68v55bGrcSQKBgQD+4ktFtZWYKfh9KVlN\nLx4vRyv5wiyvN/lhnj+MI5SLe4t3gHXlPZ+xgXvS/sQCpzNmNB55hSBkbaMyTp7/\ni0o8rJ4Ly4p+guJZrc68XxCPMOt6eOuzxl+Kq5QM5fI9ly/fKDlQ/dcKYjtTwxqW\nMzwuuj7m8xjKTDoRpNIalXNKNQKBgQD45Rxeo3m1qk2E0xikTok3Xt5nLSo+qHk+\nywTS1G4Da4iVMPAEeg+ff0VqAfnR52vvHoT5Mnmo6Dh5ihbgHxXvVmVE+d1aOTJ2\nOubiMJNON4eWJITly5ZBvQbye5qeCVsYcUIUEHIvFMvvrcs+lOochY9knrUyOFJI\nLUaG1DkwewKBgQC52PMdrxuWyfOf/4hX2SVfP7v27vh6AoxZ+3NGkaL8WWcGCart\nLhPE8C8DWDQ/4v59ZT9bSBCoabD3O5B/sGa++vZ6jz06peC5lxwJCiAe6IKq2IS0\nns6HZDgdd4U8F4MWalPwlEY6EgpENxyprE4TnEXFTDglOZOVzeJM8/AOiQKBgB+m\nkvr98uZFJ+JyLboHOq/N4p5gQfUB25k+m/hrhynsLMw8Eume1AnGV39pjOlCcplP\n2j0OTCZMkZHzG4GYsmNjKzGgTKPCjkY2q1GsN69EpHtVXYkTYKIvdYi0ay8ZpXnw\nPSTsCnkuPdjW0ve8XCEQYvG6tPQT8XK4PzW6GyOtAoGBAJFJmwenCzH5cPBgps/K\n0BXnint2vDoHIRsLIAPKiPCMlE19nJIfKLY+4RnW47Tns/YjLUA4srer73kqugYL\nVokomHlNQNuET9YNw0nTC7qie4bDnHfW2NgjbGAkvHwmhU8SxJuwWLHAWxrEOEOa\n7oFwoc64mVVsEoEX84TxCp5n\n-----END PRIVATE KEY-----\n",
//     client_email: "sheet-writer@navkar-bhavsar.iam.gserviceaccount.com",
//     client_id: "110101989644963991300",
//     auth_uri: "https://accounts.google.com/o/oauth2/auth",
//     token_uri: "https://oauth2.googleapis.com/token",
//     auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
//     client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/sheet-writer@navkar-bhavsar.iam.gserviceaccount.com",
// };

// const auth = new google.auth.GoogleAuth({
//     credentials,
//     scopes: ["https://www.googleapis.com/auth/spreadsheets"],
// });

// async function addToSheet(tabName, values) {
//     try {
//         const client = await auth.getClient();
//         const sheets = google.sheets({ version: "v4", auth: client });

//         await sheets.spreadsheets.values.append({
//             spreadsheetId: SHEET_ID,
//             range: `${tabName}!A1`,
//             valueInputOption: "USER_ENTERED",
//             requestBody: { values: [values] },
//         });

//         console.log(`✅ Data added to ${tabName} sheet`);
//     } catch (error) {
//         console.error("❌ Google Sheets error:", error);
//         throw error;
//     }
// }

// module.exports = addToSheet;





const { google } = require("googleapis");

// Sheet ID from env
const SHEET_ID = process.env.GOOGLE_SHEET_ID;
if (!SHEET_ID) throw new Error("⚠️ GOOGLE_SHEET_ID is missing in .env");

// Parse credentials JSON from env
if (!process.env.GOOGLE_CREDENTIALS) {
    throw new Error("⚠️ GOOGLE_CREDENTIALS is missing in .env");
}

let credentials;
try {
    credentials = JSON.parse(process.env.GOOGLE_CREDENTIALS);

    // Handle private_key newlines (\n → actual new line)
    if (credentials.private_key) {
        credentials.private_key = credentials.private_key.replace(/\\n/g, "\n");
    }
} catch (err) {
    console.error("❌ Failed to parse GOOGLE_CREDENTIALS:", err);
    throw err;
}

const auth = new google.auth.GoogleAuth({
    credentials,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

async function addToSheet(tabName, values) {
    try {
        const client = await auth.getClient();
        const sheets = google.sheets({ version: "v4", auth: client });

        await sheets.spreadsheets.values.append({
            spreadsheetId: SHEET_ID,
            range: `${tabName}!A1`,
            valueInputOption: "USER_ENTERED",
            requestBody: { values: [values] },
        });

        console.log(`✅ Data added to ${tabName} sheet`);
    } catch (error) {
        console.error("❌ Google Sheets error:", error);
        throw error;
    }
}

module.exports = addToSheet;
