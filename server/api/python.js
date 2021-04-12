//util will bring in the promisify function
const util = require('util')
//promisifies the exec function from child_process
const exec = util.promisify(require('child_process').exec)
const path = require('path')
const router = require('express').Router()
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const data = await runPythonScript()
    res.json(data.stdout)
  } catch (err) {
    next(err)
  }
})


//function that actually calls the test.py command
async function runPythonScript() {
  try {
    //calls and returns the new promisified exec function on test.py
    const resultOfExec = await exec(
      `python ${path.join(
        __dirname,
        "../../python/test.py")}`
    )
    return resultOfExec
  } catch (err) {
    console.log(err)
  }
}
