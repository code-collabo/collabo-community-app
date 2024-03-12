# Observation On Approaches To Flutter.

## Using/Calling for an Image widget.

We use the following code snippet when using an image widget after creating an image folder with the image needed in it, and setting the image evnironment at "Pubspec.yaml"...

body: Center(
        child: Image.asset('asset/image.png'),
      ),
    
Or this can be use

body: const Center(
        child: Image(
          image: AssetImage('asset/image.png'),
        ),
      ),
## Note
"The 'asset' is the will be the name of the folder created where the image in use are being saved. "