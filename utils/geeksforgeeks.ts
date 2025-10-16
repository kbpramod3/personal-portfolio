export class GeeksforGeeksQuery {
    
    static async fetchProblemsData(username: string) {
        let url = '/api/geeksforgeeks';

        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                handle: username,
                requestType: '',
                year: '',
                month: ''
            }),
        });
        return res.json();
    }
}