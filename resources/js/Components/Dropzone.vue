<template>
    <div class="dropzone" ref="dropzone">
        <div class="dz-message needsclick" v-if="type == 'file'">
            Drop files here or click to upload
            <span class="note needsclick"
                >(This is just a demo dropzone. Selected files are
                <strong>not</strong> actually uploaded.)</span
            >
        </div>

        <div class="dz-message needsclick" v-if="type == 'profile'">
            Drop files here or click to upload
        </div>

        <div class="fallback">
            <input name="file" type="file" />
        </div>
    </div>
</template>

<script>
import Dropzone from "dropzone";
export default {
    props: {
        type: {
            default: "file",
        },
        value: {
            default: null,
        },
        url: {
            type: String,
            default: "/media/upload",
        },
        collection: {
            type: String,
            required: true,
        },
        model: {
            type: String,
            required: true,
        },
        maxFiles: {
            type: Number,
            default: 1,
        },
        acceptedFiles: {
            type: String,
            default: "image/*,.pdf,.doc,.docx",
        },
        maxFilesize: {
            type: Number,
            default: 2,
        },
    },
    watch: {
        value: function (val) {
            let myDropzone = this.myDropzone;
            if (!val) {
                myDropzone.removeAllFiles();
            }
        },
    },
    data: function () {
        return {
            myDropzone: null,
        };
    },
    mounted: function () {
        this.init();
    },
    methods: {
        init: function () {
            let self = this;

            let refDropzone = this.$refs.dropzone;

            const previewTemplate = `<div class="dz-preview dz-file-preview">
                <div class="dz-details">
                <div class="dz-thumbnail">
                    <img data-dz-thumbnail>
                    <span class="dz-nopreview">No preview</span>
                    <div class="dz-success-mark"></div>
                    <div class="dz-error-mark"></div>
                    <div class="dz-error-message"><span data-dz-errormessage></span></div>
                    <div class="progress">
                    <div class="progress-bar progress-bar-primary" role="progressbar" aria-valuemin="0" aria-valuemax="100" data-dz-uploadprogress></div>
                    </div>
                </div>
                <div class="dz-filename" data-dz-name></div>
                <div class="dz-size" data-dz-size></div>
                </div>
                </div>`;

            this.myDropzone = new Dropzone(refDropzone, {
                url: self.url,
                previewTemplate: previewTemplate,
                addRemoveLinks: true,
                maxFiles: self.maxFiles,
                acceptedFiles: self.acceptedFiles,
                maxFilesize: self.maxFilesize,
            });
            let myDropzone = this.myDropzone;

            if (self.value) {
                if (self.value instanceof Array) {
                    if (self.value.length > 0) {
                        for (
                            let index = 0;
                            index < self.value.length;
                            index++
                        ) {
                            const element = self.value[index];
                            myDropzone.emit("addedfile", element);
                            myDropzone.emit("complete", element);
                            myDropzone.emit("thumbnail", element, element.src);
                            myDropzone.files.push(element);
                        }
                    }
                } else {
                    myDropzone.emit("addedfile", self.value);
                    myDropzone.emit("complete", self.value);
                    myDropzone.emit("thumbnail", self.value, self.value.src);
                    myDropzone.files.push(self.value);
                }
            }

            myDropzone.on("addedfile", (file) => {
                var maxFiles = self.maxFiles;
                if (myDropzone.files.length > maxFiles) {
                    for (
                        let index = myDropzone.files.length - maxFiles;
                        index < myDropzone.files.length;
                        index++
                    ) {
                        var f = myDropzone.files[index];
                        myDropzone.emit("maxfilesexceeded", f);
                    }
                }
            });

            myDropzone.on("success", (file) => {
                if (file.xhr.response && typeof file.xhr.response == "string") {
                    if (self.maxFiles > 1) {
                        let fileValue = JSON.parse(JSON.stringify(self.value));
                        if (!fileValue) {
                            fileValue = [];
                        }
                        fileValue.push(JSON.parse(file.xhr.response));
                        self.$emit("input", fileValue);
                    } else {
                        self.$emit("input", JSON.parse(file.xhr.response));
                    }
                }
                self.$emit("error", null);
            });

            myDropzone.on("maxfilesexceeded", function (file) {
                myDropzone.removeFile(file);
                self.$emit("error", [
                    "File exceeds the maximum limit of " +
                        this.options.maxFiles +
                        " file" +
                        (this.options.maxFiles > 1 ? "s" : ""),
                ]);
            });

            myDropzone.on("error", (file, message) => {
                console.log(message);
                myDropzone.removeFile(file);
                let replaceString = String(message).replace(/MiB/g, "MB");
                // self.$emit('error', [replaceString])
                if (String(message).includes("File is too big")) {
                    self.$emit("error", ["File size is too big. Max 2MB"]);
                }
                if (String(message).includes("You can't upload files of this type.")) {
                    self.$emit("error", ["You can't upload files of this type"]);
                } else {
                    self.$emit("error", [replaceString]);
                }
            });

            myDropzone.on("removedfile", (file) => {
                if (self.maxFiles > 1) {
                    let files = [];
                    for (
                        let index = 0;
                        index < myDropzone.files.length;
                        index++
                    ) {
                        const mdzFile = myDropzone.files[index];
                        if (mdzFile instanceof File) {
                            if (mdzFile.xhr && mdzFile.xhr.response) {
                                files.push(JSON.parse(mdzFile.xhr.response));
                            }
                        } else {
                            files.push(mdzFile);
                        }
                    }
                    self.$emit("input", files);
                } else {
                    if (myDropzone.files[0] instanceof File) {
                        self.$emit(
                            "input",
                            JSON.parse(myDropzone.files[0].xhr.response)
                        );
                    } else {
                        self.$emit("input", myDropzone.files[0]);
                    }
                }
            });

            myDropzone.on("sending", function (file, xhr, formData) {
                formData.append("collection", self.collection);
                formData.append("model", self.model);
            });
        },
    },
};
</script>
<style lang="scss">
.dropzone-profile-photo {
    .dropzone {
        padding: 15px;
        width: 200px;
        min-height: 200px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .dz-message {
        font-size: 0.85rem !important;
        margin-top: auto;
        margin-bottom: auto;

        &:before {
            display: none;
        }
    }
    .dz-preview {
        margin: 0px;
    }
    .dz-filename,
    .dz-size {
        display: none;
    }
    .dz-remove {
        color: #ea5455 !important;
    }
}
</style>
