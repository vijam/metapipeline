const mongoose = require('mongoose');
mongoose.pluralize(null);
const Schema = mongoose.Schema;

const gitSchema = new Schema({
  prcreatedBy: { type: String, required: true },
  prcreatorEmail: { type: String, required: true },
  reponame :{type :String , required :true},
  sourceBranch: { type: String, required: true },
  targetBranch: { type: String, required: true },
  pipelineStatus: {
    type: String,
    enum: ['PR Created', 'PR Approved', 'PR Merged', 'PR Rejected' ,'PR Merge Scheduled'],
    default: 'PR Created'
  },
  requestedDate: Date,
  prapprovedDate: Date,
  prmergedDate: Date,
  prnumber: { type: String, required: true },
  prapprovedBy: { type: String, required: true },
  prmergedBy: { type: String, required: true },
  prmergeisScheduled : Boolean,
  approverComments : String
});

module.exports = mongoose.model('gitdata', gitSchema);

