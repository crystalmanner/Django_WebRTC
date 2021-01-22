var React = require('react'),
    strings = {};

/*
 *  General
 */
strings.upgrade_modal_pro = {
    title: '{1} is available in the Videopath Pro Plan and above.',
    text: '{2}',
    confirmButton: 'Upgrade',
    rejectButton: 'No thanks',
    theme:'lightblue',
    icon:'diamond'
};

strings.upgrade_modal_enterprise = {
    title: '{1} is available in the Videopath Enterprise Plan and above.',
    text: '{2}',
    confirmButton: 'Contact sales',
    rejectButton: 'No thanks',
    theme:'lightblue',
    icon:'diamond'
};

strings.upgrade_modal_individual = {
    title: '{1} is available in the Videopath individual Plans and above.',
    text: '{2}',
    confirmButton: 'Contact sales',
    rejectButton: 'No thanks',
    theme:'lightblue',
    icon:'diamond'
};

/*
 *  Add integration
 */
strings.add_integration = {

    feature_description: "Integrations allow you to connect Videopath to third party services.",

    oauth_modal: {
        title: "Connect to {1}",
        text: "You will be forwarded to {1} to confirm that we can connect.",
        confirmButton:"Connect",
        rejectButton: "Cancel",
        theme: "green"
    },

    credentials_modal: {
        title: "Connect to {1}",
        text: "{2}",
        confirmButton:"Connect",
        rejectButton: "Cancel",
        theme: "green"
    }

};

/*
 *  Add Marker
 */
strings.add_marker = {
    
    limit_modal: {
        theme: 'orange',
        title: 'Marker limit reached',
        text: 'You have reached your limit of 10 Markers per video.',
        confirmButton: 'OK'
    },

    warn_modal: {
        theme: 'orange',
        title: 'Confirm create',
        text: <span>In our <a target = '_blank' href ='https://videopath.com/tutorial/best-practices/'>best practices page</a> we recommend adding between 5 and 7 markers for the best user experience. Really create another Marker?</span>,
        confirmButton: 'Create Marker',
        rejectButton: 'No thanks'
    },

    // result
    success: "New marker created for this project!"
};


/*
 *  Add Marker Content
 */
strings.add_marker_content = {
    // result
    failure: "Could not create content block. Please try again.",
    success: "Content block created!"
};


/*
 * Add team member
 */
strings.add_team_member = {
    confirm_modal: {
        title: "Add Member to Team",
        text: "Please enter the email address of the user you want to add to the team. Please make sure this user already exists.",
        confirmButton:"Add",
        rejectButton: "Cancel",
        theme: "green"
    },

    // result
    failure: "Could not add user to team. Does this account exist?",
    success: "User added to team!"
};

/*
 *  Change Password
 */
strings.change_password = {
    //results
    success: "Your password was successfully changed!",
    failure_mismatch: "New passwords don't match. Please enter the same password twice."
};


/*
 *  Change Email
 */
strings.change_email = {
    success: "Your email address was successfully changed."
};

/*
 * Create a new team
 */

strings.create_team = {
    feature_name: "Create a new team",
    feature_description: "This feature allows you to create multiple teams to better organize your projects.",
    success: "A new team was created",
    confirm_modal: {
        title: "Create a new team",
        text: "Please enter a name for your new team",
        confirmButton:"Create",
        rejectButton: "Cancel",
        theme: "green"
    }
};

/*
 *  Create Video from Revision
 */
strings.create_video_from_revision = {

    feature_name: "Create from revision",
    feature_description: "This feature allows you to create a new project from this revision.",

    confirm_modal: {
        theme: 'green',
        title: "Confirm",
        text: "Are you sure you want to create a new project from revision '{1}' ?",
        confirmButton: "Create",
        rejectButton: "Cancel",
    },
    

    // result
    success: "Your new project was created."
};


/*
 * Delete Marker
 */
strings.delete_marker = {

    confirm_modal: {
        theme: 'red',
        title: "Confirm delete",
        text: "Are you sure you want to delete the marker '{1}' and the contents of the overlay?",
        confirmButton: "Delete",
        rejectButton: "Cancel",
    },

    //result
    success: "The marker was deleted from your video.",
    failure: "Marker could not be deleted. Please try again."
};


/*
 * Delete Marker content
 */
strings.delete_marker_content = {
    //result
    success: "Content block deleted",
    failure: "Could not delete content block. Please try again."
};


/*
 * Delete Team
 */
strings.delete_team = {

    has_videos_modal: {
        theme: 'orange',
        title: "Delete Team",
        text: "Team '{1}' still contains projects. Only teams without projects can be deleted.",
        confirmButton: "OK",
    },

    confirm_modal: {
        theme: 'red',
        title: "Confirm delete",
        text: "Are you sure you want to delete team '{1}'?",
        confirmButton: "Delete",
        rejectButton: "Cancel",
    },

    success: "Team was deleted",
};


/*
 *  Delete Video
 */
strings.delete_video = {

    confirm_modal: {
        theme: 'red',
        title: "Confirm delete",
        text: "Are you sure you want to delete the project '{1}'?",
        confirmButton: "Delete",
        rejectButton: "Cancel",
    },

    //result
    success: "Your project was deleted.",
};


/*
 *  Duplicate Video
 */
strings.duplicate_video = {
    // feature
    feature_name: "Video duplication",
    feature_description: "Video duplication allows you to create a copy of your project.",

    confirm_modal: {
        theme: 'blue',
        title: "Confirm duplicate",
        text: "Are you sure you want to duplicate the project '{1}'?",
        confirmButton: "Duplicate",
        rejectButton: "Cancel",
    },

    //result
    success: "Your project was duplicated.",
};

/*
 *  Edit Video
 */
strings.edit_video = {
    // confirm
    failure: "This video is currently still processing. Please try again later."
};

/*
 *  Import Demo
 */
strings.import_demo = {
    // confirm
    success: "The demo project was imported for you!"
};


/*
 *  Import Source
 */
strings.import_source = {

    create_complete_modal: {
        title: "Import complete",
        text: "Your video is now ready for editing!",
        confirmButton: "Ok",
        theme: 'green'
    },

    replace_complete_modal: {
        title: "Import complete",
        text: "Your video source has been replaced!",
        confirmButton: "Ok",
        theme: 'green'
    },

    failure_modal: {
        title: "Import Error",
        text: "{1}",
        confirmButton: "Ok",
        theme: 'orange'
    },

};


/*
 * Leave Team
 */

strings.leave_team = {
    confirm_modal: {
        title: "Leave Team",
        text: "Are you sure you want to leave team {1}?",
        confirmButton: "Leave",
        rejectButton: "Cancel",
        theme: 'orange'
    },
    success: "You have left the team"
};


/*
 *  Login
 */
strings.login = {
    // confirm
    failure: "Could not log in. Did you provide the right username and password?"
};


/*
 *  Preview
 */
strings.preview_video = {
    progress: 'Loading the preview...'
};

/*
 *  Publish Video
 */
strings.publish_video = {

    confirm_update_modal: {
        title: "Finish Project",
        text: "Do you want to finish this project? Your project will only be visible to those you share the URL with.",
        confirmButton: "Publish",
        rejectButton: "Cancel",
        theme: 'green'
    },

    confirm_publish_modal: {
        title: "Update Project",
        text: "If you update this project, all copies of your video will be automatically updated. It may take around 10 minutes for all the live links to update.",
        confirmButton: "Update",
        rejectButton: "Cancel",
        theme: 'green'
    },

    //result
    success: "Your project was published.",
    progress: "Your project is being published. This may take a few seconds."
};

/*
 * Remove team member
 */
strings.remove_team_member = {
    confirm_modal: {
        title: "Remove Member",
        text: "Do you really want to remove member {1} from team {2}?",
        confirmButton: "Remove",
        rejectButton: "Cancel",
        theme: 'orange'
    },
};


/*
 * Rename a new team
 */

strings.rename_team = {
    success: "Your team was renamed",
    confirm_modal: {
        title: "Rename your team",
        text: "Please enter a new name for your team",
        confirmButton:"Rename",
        rejectButton: "Cancel",
        theme: "blue"
    }
};

/*
 *  Reset Password
 */
strings.reset_password = {
    // confirm
    success: "Your password has been reset, you will receive an email with further instruction.",
    failure: "We do not seem to have a user with this username or email address."
};

/*
 *  Revert Video Revision 
 */
strings.revert_video_revision = {
    feature_name: "Revert to revision",
    feature_description: "This feature allows you to reset your project to an old revision.",

    confirm_modal: {
        title: "Confirm revert",
        text: "Are you sure you want to revert this project's current draft to revision '{1}' from {2}?",
        confirmButton: "Revert",
        rejectButton: "Cancel",
        theme: 'green'
    },

    //result
    success: "Your video was reverted to the selected revision."
};


/*
 *  Credit card
 */
strings.save_credit_card = {
    success: "Your credit card was saved!",
    failure: "Your credit card could not be saved!"
};


/*
 *  Payment details
 */
strings.save_payment_details = {
    success: "Your payment address was updated!",
    failure: "Please make sure you have filled out all required (*) address fields!"
};

/*
 *  Save all payment info
 */
strings.save_all_payment_info = {
    success: "Payment details saved."
};

/*
 *  Share Email
 */
strings.share_email = {
    //result
    success: "Your message has been sent!",
    failure: "One or more of the email addresses you provided don't seem to be valid."
};

/*
 *  Remove Integration
 */
strings.remove_integration = {
    // confirm
    confirm_modal: {
        title: "Confirm Remove",
        text: "Are you sure you want to unlink {1} from your account?",
        confirmButton: "Unlink",
        rejectButton: "Cancel",
        theme: 'red'
    },
    
};

/*
 *  Change video source
 */
strings.show_change_source = {
    feature_name: "Change project source",
    feature_description: "This feature allows you to change the video source of your project"
};

/*
 *  Subscribe user
 */
strings.subscribe_user = {
    //result
    success_modal: {
        title: "Success!",
        text: "You have now been subscribed to the Videopath Pro Plan! Start building new projects now.",
        confirmButton: "Ok",
        theme: 'green'
    },
    failure: "Could not subscribe you, please try again."
};

/*
 *   Transcode for iphone
 */
strings.iphone_transcode = {

    confirm_modal: {
        title: "Confirm iPhone!",
        text: "Are you sure you want to prepare this project for playback on iPhone?",
        confirmButton: "Prepare",
        rejectButton: "Cancel",
        theme: 'green'
    },

    // result
    success: "Your project will now be prepared for iPhone playback. You will receive an email once this process is completed.",
    failure: "Your project could not be prepared for iPhone playback. Please try again."
};

/*
 *  Unpublish Video
 */
strings.unpublish_video = {


    confirm_modal: {
        title: "Confirm unpublish",
        text: "Are you sure you want to unpublish this video? Your video will be saved as a draft and any shared copies of the video will be unpublished and unavailable for viewing.",
        confirmButton: "Unpublish",
        rejectButton: "Cancel",
        theme: 'orange'
    },

    //result
    success: "Your video was unpublished.",
    progress: "Your project is being unpublished. This may take a few seconds."
};

/*
 *  Unsubscribe User
 */
strings.unsubscribe_user = {


    confirm_modal: {
        title: "Really Unsubscribe?",
        text: "Do you really want to unsubscribe from your current plan? You will be downgraded to a free personal plan as soon as your subscription period ends.",
        confirmButton: "Unsubscribe",
        rejectButton: "Cancel",
        theme: 'orange'
    },

    success_modal: {
        title: "Unsubscribed!",
        text: "You have now been unsubcribed from Videopath. We're sorry to see you leave. ",
        confirmButton: "Ok",
        theme: 'orange'
    },
    
    // result
    failure: 'Could not unsubscribe. Please try again. If this error persists, please contact sales@videopath.com.'
};

/*
 *  Upload File
 */
strings.upload_file = {

    file_failure_modal: {
        title: "File Error",
        text: "This file type is not supported. Please try uploading a video file, such as .mov or .avi.",
        confirmButton: "OK",
        theme: 'orange'
    },

    complete_modal: {
        title: "Upload Complete",
        text: "Your video file is now being prepared. This usually takes 10-30 minutes. You will be notified by email as soon as you can edit your project.",
        confirmButton: "OK",
        theme: 'green'
    },

    upload_failure_modal: {
        title: 'Upload failed',
        text: '{1}',
        confirmButton: "OK",
        theme: 'orange'
    },

};

module.exports = strings;
