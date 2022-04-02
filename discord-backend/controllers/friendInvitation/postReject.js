const friendInvitation = require('../../models/friendInvitation');
const friendsUpdate = require('../../sockethandlers/updates/friends');


const postReject = async (Req, res) => {
    try {
        const { id } = req.body;
            const { userId } = req.user; 

            // remove that invitation from friend invations collections
            const invitationExists = await friendInvitation.exists({ _id: id});


            if (invitationExists) {
                await FriendInvitation.findByIdAndDelete(id);
            }


         // update pending invitations
         friendsUpdates.updateFriendsPendingInvitations(userId);

         return res.status(200).send('Invitation successfully rejected');
         
    } catch (err) {
        console.log(err);
            return res.status(500).send('Something went wrong. Please try again.');
        
    }  
};

module.exports = postReject;