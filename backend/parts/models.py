from django.conf import settings
from django.db import models


class AllOurParts(models.Model):
    "Generated Model"
    a10brake = models.ForeignKey(
        "hydrostat.Columns",
        on_delete=models.CASCADE,
        related_name="allourparts_a10brake",
    )
    a10NLGuplockAct = models.CharField(
        null=True,
        blank=True,
        max_length=256,
    )
    a10slatact = models.URLField(
        null=True,
        blank=True,
        max_length=256,
    )
    a10rudderact = models.URLField(
        null=True,
        blank=True,
    )
    a10elevatoract = models.URLField(
        null=True,
        blank=True,
    )
    a10reservoir = models.URLField(
        null=True,
        blank=True,
    )
    a10bootstrapaccum = models.URLField(
        null=True,
        blank=True,
    )
    a10flapact = models.URLField(
        null=True,
        blank=True,
    )
    a10actuatorm1m2 = models.URLField(
        null=True,
        blank=True,
    )
    a10emeraccum = models.URLField(
        null=True,
        blank=True,
    )
    a10swivel521233 = models.URLField(
        null=True,
        blank=True,
    )
    a10swivel0611045001 = models.URLField(
        null=True,
        blank=True,
    )
    a10swivel061149001002 = models.URLField(
        null=True,
        blank=True,
    )
    a10swivel71215 = models.URLField(
        null=True,
        blank=True,
    )
    a10swivel72139 = models.URLField(
        null=True,
        blank=True,
    )
    a10swivel1428951 = models.URLField(
        null=True,
        blank=True,
    )
    f15rhmlg = models.URLField(
        null=True,
        blank=True,
    )
    f15lhmlg = models.URLField(
        null=True,
        blank=True,
    )
    f15nlg = models.URLField(
        null=True,
        blank=True,
    )
    f15jfsaccum = models.URLField(
        null=True,
        blank=True,
    )
    f15speedbrakeswivel = models.URLField(
        null=True,
        blank=True,
    )
    f15speedbrakeact = models.URLField(
        null=True,
        blank=True,
    )
    f15canopyact = models.URLField(
        null=True,
        blank=True,
    )
    f15mlgact = models.URLField(
        null=True,
        blank=True,
    )
    f15tailhookact = models.URLField(
        null=True,
        blank=True,
    )
    f15pcreservoir = models.URLField(
        null=True,
        blank=True,
    )
    f15pumpmanifold = models.URLField(
        null=True,
        blank=True,
    )
    f15utilres = models.URLField(
        null=True,
        blank=True,
    )
    f15brake = models.URLField(
        null=True,
        blank=True,
    )
    f15tailhookdamper = models.URLField(
        null=True,
        blank=True,
    )
    f15nlgact = models.URLField(
        null=True,
        blank=True,
    )
    f16FCA = models.URLField(
        null=True,
        blank=True,
    )
    f16JFS = models.URLField(
        null=True,
        blank=True,
    )
    f16RESACCUM = models.URLField(
        null=True,
        blank=True,
    )
    f16ARDOORACT = models.URLField(
        null=True,
        blank=True,
    )
    f16DWNLOCK105 = models.BigIntegerField(
        null=True,
        blank=True,
    )
    f16dwnlock107 = models.URLField(
        null=True,
        blank=True,
    )
    f16jfsdooract = models.URLField(
        null=True,
        blank=True,
    )
    f16mainretactblk25 = models.BigIntegerField(
        null=True,
        blank=True,
    )
    f16mainretactblk25103 = models.URLField(
        null=True,
        blank=True,
    )
    f16mainretactblk42 = models.URLField(
        null=True,
        blank=True,
    )
    f16noseretact002 = models.URLField(
        null=True,
        blank=True,
    )
    f16noseret003 = models.URLField(
        null=True,
        blank=True,
    )
    f16noseret004 = models.URLField(
        null=True,
        blank=True,
    )
    f16steeract = models.URLField(
        null=True,
        blank=True,
    )
    f1630brake = models.URLField(
        null=True,
        blank=True,
    )
    f1650brake = models.URLField(
        null=True,
        blank=True,
    )
    f16bcv = models.URLField(
        null=True,
        blank=True,
    )
    f16commservo = models.URLField(
        null=True,
        blank=True,
    )
    f16filterret12rv = models.URLField(
        null=True,
        blank=True,
    )
    f16filterpress31rv = models.URLField(
        null=True,
        blank=True,
    )
    f16jfshandpump = models.URLField(
        null=True,
        blank=True,
    )
    f16pdublk25 = models.URLField(
        null=True,
        blank=True,
    )
    f16pdublk42 = models.URLField(
        null=True,
        blank=True,
    )
    f16resdash6 = models.URLField(
        null=True,
        blank=True,
    )
    f16resdash7 = models.URLField(
        null=True,
        blank=True,
    )
    f16resdash8 = models.URLField(
        null=True,
        blank=True,
    )
    f16swivel801 = models.URLField(
        null=True,
        blank=True,
    )
    f16swivel810 = models.URLField(
        null=True,
        blank=True,
    )
    f16swivel811 = models.URLField(
        null=True,
        blank=True,
    )
    f16mlgblock25 = models.URLField(
        null=True,
        blank=True,
    )
    f16mlgblock42 = models.URLField(
        null=True,
        blank=True,
    )
    f16nlgblock25 = models.URLField(
        null=True,
        blank=True,
    )
    f16nlgblock42 = models.URLField(
        null=True,
        blank=True,
    )
    f16cartvlvdash3 = models.URLField(
        null=True,
        blank=True,
    )
    f16cartvlvdash2 = models.URLField(
        null=True,
        blank=True,
    )
    f16cartvlvdash6 = models.URLField(
        null=True,
        blank=True,
    )
    f16staypac = models.URLField(
        null=True,
        blank=True,
    )


# Create your models here.
