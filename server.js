const express = require('express')
const { exec } = require('child_process')
const path = require('path')
const cors = require('cors')

const app = express()
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.static(path.join(__dirname)))

function runGit(cmd, res){
  exec(cmd, { cwd: process.cwd(), maxBuffer: 1024*1024 }, (err, stdout, stderr) => {
    if(err){
      return res.status(500).json({ error: err.message, stderr: stderr && stderr.toString() })
    }
    res.json({ output: (stdout||'').toString() })
  })
}

app.get('/api/status', (req, res) => {
  // porcelain gives machine-friendly output
  runGit('git status --porcelain', res)
})

app.get('/api/log', (req, res) => {
  // last 20 commits
  runGit('git log --oneline -n 20', res)
})

app.get('/api/branches', (req, res) => {
  runGit('git branch --list --verbose', res)
})

app.listen(PORT, () => {
  console.log(`Git Version Checker listening on http://localhost:${PORT}`)
})

// Security note in logs
console.log('Warning: This server executes git commands on the host. Do not expose it to untrusted networks.')
