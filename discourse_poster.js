/**
 * Utility to post the same report as a new topic 
 * in the DAO's "Transparency" forum on Discourse.
 */
async function postToDiscourse(title, content) {
    const DISCOURSE_URL = process.env.DISCOURSE_URL;
    const API_KEY = process.env.DISCOURSE_API_KEY;

    await axios.post(`${DISCOURSE_URL}/posts.json`, {
        title: title,
        raw: content,
        category: 5 // Example category ID for "Transparency"
    }, {
        headers: { "Api-Key": API_KEY, "Api-Username": "TreasuryBot" }
    });
}
