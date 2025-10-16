export class HackerrankQuery {
    
    static async fetchProblemsData() {
        let url = '/api/hackerrank';

        const res = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return res.json();
    }
}