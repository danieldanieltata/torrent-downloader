const router = require('express').Router();
const downloadTorrentBL = require('../bl/downloadTorrentBL');

class DownloadTorrentController {
    constructor() { 
        this.router = router;
        this.downloadTorrentBL = downloadTorrentBL;

        this.router.post('/DownloadTorrent/StartDownload', this.downloadTorrent.bind(this));
        this.router.get('/DownloadTorrent/GetDownloadsStatus', this.getDownloadsStatus.bind(this));
    }

    async downloadTorrent({ body: { magnetUri } }, res) {
        const responseObj = {};
        const { name, path, progress } = await this.downloadTorrentBL.startTorrentDownload(magnetUri);
        responseObj.data = { name, path, progress };
        res.send(responseObj);
    }  
    
    async getDownloadsStatus(req, res) {
        const responseObj = {};
        responseObj.data = await this.downloadTorrentBL.getDownloadsStatus();
        res.send(responseObj);
    }
}

module.exports = new DownloadTorrentController();