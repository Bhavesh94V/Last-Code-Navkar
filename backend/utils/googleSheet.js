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
