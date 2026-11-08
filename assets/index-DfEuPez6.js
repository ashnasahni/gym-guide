(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function e(e){let t=String(e.getMonth()+1).padStart(2,`0`),n=String(e.getDate()).padStart(2,`0`);return`${e.getFullYear()}-${t}-${n}`}function t(e,t){let n=new Date(e);return n.setDate(n.getDate()+t),n}function n(e){let t=new Date(e);return t.setHours(0,0,0,0),t.setDate(t.getDate()-(t.getDay()+6)%7),t}var r={"machine-chest-press":{id:`machine-chest-press`,name:`Machine Chest Press`,muscles:`Chest, front shoulders, triceps`,equipment:[`chest-press`],setup:[`Set the seat so the handles line up with the middle of your chest.`,`Sit with your back and head flat against the pad, feet flat on the floor.`],steps:[`Grip the handles and press them forward until your arms are almost straight.`,`Bring them back slowly, about 2 seconds, until you feel a light stretch in your chest.`],mistakes:[`Seat too low, so your shoulders do the work instead of your chest.`,`Letting the weight stack slam between reps.`],stress:{shoulders:`moderate`},video:{youtubeId:`B-zyH8OTlsg`,channel:`Hammer Fitness`}},"dumbbell-bench-press":{id:`dumbbell-bench-press`,name:`Dumbbell Bench Press`,muscles:`Chest, front shoulders, triceps`,equipment:[`dumbbells`,`bench`],setup:[`Sit on the end of a flat bench with dumbbells on your thighs.`,`Lie back, bringing the dumbbells to the sides of your chest.`],steps:[`Press both dumbbells up until your arms are straight above your chest.`,`Lower slowly until your elbows are a little below the bench.`],mistakes:[`Elbows flared straight out to the sides — keep them at about 45° from your body.`,`Arching your lower back off the bench.`],stress:{shoulders:`moderate`,wrists:`moderate`},video:{youtubeId:`sTYWWaunX8o`,channel:`Born Fitness`}},"incline-dumbbell-press":{id:`incline-dumbbell-press`,name:`Incline Dumbbell Press`,muscles:`Upper chest, front shoulders`,equipment:[`dumbbells`,`bench`],setup:[`Set the bench to a low incline, about 30°.`,`Sit back with a dumbbell at each shoulder.`],steps:[`Press up and slightly in until your arms are straight.`,`Lower slowly back to shoulder level.`],mistakes:[`Bench set too steep, which turns it into a shoulder exercise.`,`Bouncing the weights at the bottom.`],stress:{shoulders:`moderate`,wrists:`moderate`},video:{youtubeId:`c1ZX5ZXMQVk`,channel:`Vivian Ngo`}},"pec-deck-fly":{id:`pec-deck-fly`,name:`Pec Deck Fly`,muscles:`Chest`,equipment:[`pec-deck`],setup:[`Set the seat so the handles are at chest height.`,`Set the arms so you start with a comfortable stretch, not a deep one.`],steps:[`With a slight bend in your elbows, bring the handles together in front of you.`,`Squeeze for a second, then open slowly.`],mistakes:[`Starting with the arms pulled too far back.`,`Shrugging your shoulders up toward your ears.`],stress:{shoulders:`moderate`},video:{youtubeId:`hZ0CGRaKwbQ`,channel:`Hammer Fitness`}},"cable-fly":{id:`cable-fly`,name:`Cable Chest Fly`,muscles:`Chest`,equipment:[`cable`],setup:[`Set both pulleys at shoulder height with single handles.`,`Step forward into a split stance.`],steps:[`With soft elbows, bring the handles together in front of your chest.`,`Open back out slowly until your hands are in line with your chest.`],mistakes:[`Bending and straightening your elbows — it should be a hug, not a press.`],stress:{shoulders:`moderate`},video:{youtubeId:`pJDbn8Kyx0o`,channel:`StrengthLog`}},"machine-shoulder-press":{id:`machine-shoulder-press`,name:`Machine Shoulder Press`,muscles:`Shoulders, triceps`,equipment:[`shoulder-press`],setup:[`Set the seat so the handles start at about shoulder height.`,`Sit with your back flat against the pad.`],steps:[`Press the handles up until your arms are almost straight.`,`Lower slowly back to shoulder height.`],mistakes:[`Arching your lower back off the pad.`,`Pushing your head forward.`],stress:{shoulders:`moderate`},video:{youtubeId:`e5gJP7quyGk`,channel:`Vivian Ngo`}},"seated-dumbbell-shoulder-press":{id:`seated-dumbbell-shoulder-press`,name:`Seated Dumbbell Shoulder Press`,muscles:`Shoulders, triceps`,equipment:[`dumbbells`,`bench`],setup:[`Set the bench upright with your back supported.`,`Hold a dumbbell at each shoulder, palms forward.`],steps:[`Press up until your arms are straight overhead.`,`Lower slowly back to your shoulders.`],mistakes:[`Leaning back and arching to push heavier weight.`],stress:{shoulders:`moderate`,lowerBack:`moderate`},video:{youtubeId:`fuQpuu--bMI`,channel:`That Fit Friend`}},"dumbbell-lateral-raise":{id:`dumbbell-lateral-raise`,name:`Seated Lateral Raise`,muscles:`Side shoulders`,equipment:[`dumbbells`,`bench`],setup:[`Sit upright on a bench holding light dumbbells at your sides.`],steps:[`Raise your arms out to the side until they are level with your shoulders.`,`Lower slowly over about 2 seconds.`],mistakes:[`Shrugging — keep your shoulders pressed down, away from your ears.`,`Going too heavy and swinging the weights up.`],stress:{neckUpperBack:`moderate`},video:{youtubeId:`yKAxVcU3nfw`,channel:`Vivian Ngo`}},"cable-tricep-pushdown":{id:`cable-tricep-pushdown`,name:`Cable Tricep Pushdown`,muscles:`Triceps`,equipment:[`cable`],setup:[`Set the pulley high with a rope or straight bar.`,`Stand close with your elbows tucked at your sides.`],steps:[`Push down until your arms are straight, without moving your elbows.`,`Let it rise slowly back to about chest height.`],mistakes:[`Elbows drifting forward.`,`Leaning your whole body over the bar.`],stress:{},video:{youtubeId:`d-ySLTHUgQA`,channel:`Vivian Ngo`}},"overhead-cable-extension":{id:`overhead-cable-extension`,name:`Overhead Cable Tricep Extension`,muscles:`Triceps`,equipment:[`cable`],setup:[`Set the pulley low with a rope.`,`Face away from the machine, rope behind your head.`],steps:[`Straighten your arms overhead.`,`Bend your elbows slowly to lower the rope behind your head.`],mistakes:[`Elbows flaring wide.`,`Arching your lower back.`],stress:{shoulders:`moderate`,neckUpperBack:`moderate`},video:{youtubeId:`mRozZKkGIfg`,channel:`Bodybuilding.com`}},"assisted-dip":{id:`assisted-dip`,name:`Assisted Dip`,muscles:`Triceps, chest`,equipment:[`assisted-pullup`],setup:[`Pick an assistance weight — more weight means more help.`,`Kneel on the pad and grip the dip handles.`],steps:[`Lower until your elbows are at about 90°.`,`Push back up to straight arms.`],mistakes:[`Going too deep, which strains the front of the shoulder.`],stress:{shoulders:`high`,wrists:`moderate`},video:{youtubeId:`slD5hhM_thg`,channel:`UMW Campus Recreation`},weightKind:`assist`},"lat-pulldown":{id:`lat-pulldown`,name:`Lat Pulldown`,muscles:`Upper back (lats), biceps`,equipment:[`lat-pulldown`],setup:[`Set the knee pad so your thighs are snug underneath it.`,`Grip the bar a little wider than your shoulders.`],steps:[`Pull the bar down to your upper chest, leading with your elbows.`,`Let it rise slowly until your arms are straight.`],mistakes:[`Pulling the bar behind your neck — always pull to the front.`,`Leaning far back and using momentum.`],stress:{wrists:`moderate`},video:{youtubeId:`oMJmAHRZXBk`,channel:`UC Davis Health`}},"assisted-pullup":{id:`assisted-pullup`,name:`Assisted Pull-Up`,muscles:`Upper back (lats), biceps`,equipment:[`assisted-pullup`],setup:[`Pick an assistance weight — more weight means more help.`,`Kneel on the pad and grip the top handles.`],steps:[`Pull yourself up until your chin is over the handles.`,`Lower slowly to straight arms.`],mistakes:[`Craning your neck to get your chin over.`],stress:{shoulders:`moderate`,neckUpperBack:`moderate`},video:{youtubeId:`fnHeovkmkkk`,channel:`Fitness 19`},weightKind:`assist`},"chest-supported-row":{id:`chest-supported-row`,name:`Chest-Supported Dumbbell Row`,muscles:`Mid back, rear shoulders, biceps`,equipment:[`dumbbells`,`bench`],setup:[`Set the bench to a low incline and lie face down on it, chest on the pad.`,`Let a dumbbell hang straight down from each hand.`],steps:[`Pull the dumbbells up toward your hips, squeezing your shoulder blades together.`,`Lower slowly until your arms are straight.`],mistakes:[`Lifting your chest off the pad.`,`Shrugging the weights up instead of rowing.`],stress:{},video:{youtubeId:`Nx0TzjgsI-0`,channel:`PureGym`}},"seated-cable-row":{id:`seated-cable-row`,name:`Seated Cable Row`,muscles:`Mid back, biceps`,equipment:[`seated-row`],setup:[`Sit with feet on the footplates and knees slightly bent.`,`Grip the handle and sit up tall.`],steps:[`Pull the handle to your belly button, squeezing your shoulder blades together.`,`Let your arms straighten slowly without rounding your back.`],mistakes:[`Rocking your torso back and forth.`,`Rounding your lower back as the handle goes forward.`],stress:{lowerBack:`moderate`},video:{youtubeId:`oFtfkSElE0s`,channel:`Hammer Fitness`}},"face-pull":{id:`face-pull`,name:`Cable Face Pull`,muscles:`Rear shoulders, upper back`,equipment:[`cable`],setup:[`Set the pulley at about face height with a rope.`,`Hold the rope ends with thumbs pointing back.`],steps:[`Pull the rope toward your face, splitting the ends apart beside your ears.`,`Return slowly with control.`],mistakes:[`Going heavy — this is a light, controlled exercise.`,`Shrugging toward your ears.`],stress:{},video:{youtubeId:`eTCBSFlCJ_s`,channel:`NASM`}},"reverse-pec-deck":{id:`reverse-pec-deck`,name:`Reverse Pec Deck`,muscles:`Rear shoulders, upper back`,equipment:[`pec-deck`],setup:[`Sit facing the pad, chest against it.`,`Set the handles so your arms start in front of you.`],steps:[`With slightly bent elbows, open your arms out to the side.`,`Return slowly.`],mistakes:[`Shrugging your shoulders up.`,`Swinging the weight.`],stress:{},video:{youtubeId:`v0rJuhEa59c`,channel:`FIT.nl`}},"dumbbell-curl":{id:`dumbbell-curl`,name:`Seated Dumbbell Curl`,muscles:`Biceps`,equipment:[`dumbbells`,`bench`],setup:[`Sit upright on a bench with a dumbbell in each hand, palms forward.`],steps:[`Curl the weights up, keeping your elbows at your sides.`,`Lower slowly to straight arms.`],mistakes:[`Swinging your body to lift the weight.`,`Elbows drifting forward.`],stress:{wrists:`moderate`},video:{youtubeId:`SW5JS2Wf2uQ`,channel:`Horton Barbell`}},"cable-curl":{id:`cable-curl`,name:`Cable Curl`,muscles:`Biceps`,equipment:[`cable`],setup:[`Set the pulley low with a straight bar.`,`Stand close with elbows at your sides.`],steps:[`Curl the bar up toward your shoulders.`,`Lower slowly.`],mistakes:[`Leaning back to help the weight up.`],stress:{wrists:`moderate`},video:{youtubeId:`0TtZgAuC8Vw`,channel:`Holly Perkins`}},"hammer-curl":{id:`hammer-curl`,name:`Seated Hammer Curl`,muscles:`Biceps, forearms`,equipment:[`dumbbells`,`bench`],setup:[`Sit upright with dumbbells at your sides, palms facing each other.`],steps:[`Curl up keeping your palms facing each other.`,`Lower slowly.`],mistakes:[`Swinging the weights.`],stress:{},video:{youtubeId:`bdlqQAVdcEk`,channel:`Vivian Ngo`}},"leg-press":{id:`leg-press`,name:`Leg Press`,muscles:`Thighs, glutes`,equipment:[`leg-press`],setup:[`Sit back with your lower back flat against the pad.`,`Feet shoulder-width apart, in the middle or slightly high on the platform.`],steps:[`Release the safety handles and lower the platform slowly.`,`Stop when your knees reach about 90°, before your lower back starts to lift off the pad.`,`Push back up through your whole foot, without locking your knees.`],mistakes:[`Going so deep your hips curl up off the seat.`,`Knees caving inward — keep them pointing the same way as your toes.`],stress:{knees:`moderate`,lowerBack:`moderate`,feet:`moderate`},video:{youtubeId:`90NY9tka1TQ`,channel:`Vivian Ngo`}},"barbell-back-squat":{id:`barbell-back-squat`,name:`Barbell Back Squat`,muscles:`Thighs, glutes, core`,equipment:[`squat-rack`],setup:[`Set the bar at upper-chest height.`,`Step under it and rest it across your upper back.`],steps:[`Squat down until your thighs are about parallel to the floor.`,`Drive back up through your feet.`],mistakes:[`Knees caving in.`,`Rounding your back at the bottom.`],stress:{knees:`high`,lowerBack:`high`,neckUpperBack:`moderate`,feet:`moderate`},video:{youtubeId:`8PMjqgR8Wa8`,channel:`Barbell Rehab`}},"goblet-squat":{id:`goblet-squat`,name:`Goblet Squat`,muscles:`Thighs, glutes`,equipment:[`dumbbells`],setup:[`Hold one dumbbell upright against your chest.`,`Feet slightly wider than shoulders, toes turned out a little.`],steps:[`Sit down between your heels, keeping your chest up.`,`Stand back up.`],mistakes:[`Heels lifting off the floor.`,`Knees caving in.`],stress:{knees:`high`,lowerBack:`moderate`,feet:`moderate`},video:{youtubeId:`zsN2WvklwDk`,channel:`Janice Liang`}},"glute-bridge":{id:`glute-bridge`,name:`Dumbbell Glute Bridge`,muscles:`Glutes, hamstrings`,equipment:[`dumbbells`,`mat`],setup:[`Lie on your back on a mat, knees bent, feet flat and hip-width apart.`,`Rest a dumbbell across your hips and hold it in place.`],steps:[`Squeeze your glutes and lift your hips until your body is straight from knees to shoulders.`,`Hold for a second, then lower slowly.`],mistakes:[`Arching your lower back at the top — the lift should come from your glutes.`],stress:{},video:{youtubeId:`PSMW7iSi2BU`,channel:`Holly Perkins`}},"dumbbell-romanian-deadlift":{id:`dumbbell-romanian-deadlift`,name:`Dumbbell Romanian Deadlift`,muscles:`Hamstrings, glutes`,equipment:[`dumbbells`],setup:[`Stand holding dumbbells in front of your thighs, knees slightly bent.`],steps:[`Push your hips back and lower the weights along your legs, back flat.`,`Stand back up by squeezing your glutes.`],mistakes:[`Rounding your back.`,`Turning it into a squat by bending your knees a lot.`],stress:{lowerBack:`high`},video:{youtubeId:`dNQucsVf90I`,channel:`Vivian Ngo`}},"seated-leg-curl":{id:`seated-leg-curl`,name:`Leg Curl`,muscles:`Hamstrings`,equipment:[`leg-curl`],setup:[`Line up your knees with the machine's pivot point.`,`The pad should sit just above your heels.`],steps:[`Bend your knees to pull the pad down and back.`,`Return slowly to almost straight.`],mistakes:[`Letting the weight snap your legs straight.`,`Lifting your hips to cheat the weight.`],stress:{knees:`moderate`},video:{youtubeId:`_2Kd0d-JEUM`,channel:`NASM`}},"hip-abduction":{id:`hip-abduction`,name:`Hip Abduction Machine`,muscles:`Outer glutes`,equipment:[`hip-abduction`],setup:[`Sit with your back against the pad, pads on the outside of your knees.`],steps:[`Push your knees outward.`,`Return slowly without letting the weights touch.`],mistakes:[`Rocking your body to move the weight.`],stress:{},video:{youtubeId:`5O_Y9l__iao`,channel:`Hammer Fitness`}},"leg-extension":{id:`leg-extension`,name:`Leg Extension`,muscles:`Front of thighs`,equipment:[`leg-extension`],setup:[`Line up your knees with the machine's pivot point.`,`The pad should sit on your lower shins.`],steps:[`Straighten your legs.`,`Lower slowly.`],mistakes:[`Kicking the weight up fast.`],stress:{knees:`high`},video:{youtubeId:`MXvSzXEBOTI`,channel:`Steev`}},"dead-bug":{id:`dead-bug`,name:`Dead Bug`,muscles:`Deep core`,equipment:[`mat`],setup:[`Lie on your back with arms pointing up and knees bent at 90° above your hips.`],steps:[`Press your lower back gently into the mat.`,`Slowly lower one arm and the opposite leg toward the floor, then return. Switch sides.`],mistakes:[`Letting your lower back lift off the mat — make the movement smaller if it does.`],stress:{},video:{youtubeId:`bxn9FBrt4-A`,channel:`NASM`},weightKind:`bodyweight`},"pallof-press":{id:`pallof-press`,name:`Cable Pallof Press`,muscles:`Core, obliques`,equipment:[`cable`],setup:[`Set a cable at chest height with a single handle.`,`Stand side-on to the machine, holding the handle at your chest with both hands.`],steps:[`Press the handle straight out in front of you without letting it pull you sideways.`,`Hold for 2 seconds, bring it back. Do both sides.`],mistakes:[`Twisting toward the machine.`],stress:{},video:{youtubeId:`SY5lRzBPtM4`,channel:`Fitness Lab`}},"cable-crunch":{id:`cable-crunch`,name:`Cable Crunch`,muscles:`Abs`,equipment:[`cable`],setup:[`Set the pulley high with a rope.`,`Kneel facing the machine, rope beside your head.`],steps:[`Crunch down, bringing your elbows toward your knees.`,`Rise back up slowly.`],mistakes:[`Pulling with your arms instead of your abs.`,`Yanking your neck forward.`],stress:{lowerBack:`moderate`,neckUpperBack:`moderate`},video:{youtubeId:`0KEP6A1deBE`,channel:`Travis Tarrant`}},"side-plank":{id:`side-plank`,name:`Side Plank`,muscles:`Obliques, core`,equipment:[`mat`],setup:[`Lie on your side, propped up on your forearm, elbow under your shoulder.`],steps:[`Lift your hips so your body is a straight line.`,`Hold for 20–30 seconds. Switch sides.`],mistakes:[`Hips sagging toward the floor.`],stress:{shoulders:`moderate`},video:{youtubeId:`0M-erHBl48U`,channel:`Heal Fit Physio`},weightKind:`bodyweight`,timedSeconds:{min:20,max:30}}},i={"home-dead-bug":{...r[`dead-bug`],id:`home-dead-bug`,equipment:[]},"home-side-plank":{...r[`side-plank`],id:`home-side-plank`,equipment:[]},"bird-dog":{id:`bird-dog`,name:`Bird Dog`,muscles:`Deep core, lower back, glutes`,equipment:[],setup:[`Kneel on all fours on a mat, towel, or carpet, with your hands under your shoulders and your knees under your hips.`,`Keep your back flat and your neck long, eyes on the floor.`],steps:[`Tighten your belly and slowly reach one arm forward and the opposite leg straight back.`,`Hold for a second without letting your hips tilt or your back sag.`,`Bring them back with control, then switch sides.`],mistakes:[`Arching your lower back as the leg lifts: only raise it as high as your back stays flat.`,`Rushing and swinging the arm and leg.`],stress:{knees:`moderate`,wrists:`moderate`},video:{youtubeId:`KA0ekfSePrQ`,channel:`Tone and Tighten`},weightKind:`bodyweight`},"forearm-plank":{id:`forearm-plank`,name:`Forearm Plank`,muscles:`Abs, shoulders, glutes`,equipment:[],setup:[`Lie face down, then prop yourself up on your forearms with your elbows right under your shoulders.`,`Tuck your toes and lift your hips so your body makes one straight line.`],steps:[`Squeeze your glutes and brace your abs, as if bracing for a light punch.`,`Breathe steadily and hold. Stop when your form starts to slip.`,`Lower your knees to rest.`],mistakes:[`Letting your hips sag so your lower back arches.`,`Piking your hips up, which takes the work off your abs.`,`Holding your breath or craning your neck up.`],stress:{lowerBack:`moderate`,shoulders:`moderate`},video:{youtubeId:`gSDNblPRh1U`,channel:`Masterpiece Training`},weightKind:`bodyweight`,timedSeconds:{min:20,max:40}},"home-glute-bridge":{id:`home-glute-bridge`,name:`Glute Bridge`,muscles:`Glutes, hamstrings`,equipment:[],setup:[`Lie on your back with your knees bent and your feet flat on the floor, hip-width apart.`,`Rest your arms at your sides, palms down.`],steps:[`Press your lower back gently toward the floor, then push through your heels to lift your hips.`,`Stop when your shoulders, hips and knees make a straight line, and squeeze your glutes.`,`Lower slowly.`],mistakes:[`Lifting so high that your lower back arches: the lift should come from your glutes.`,`Pushing through your toes instead of your heels.`],stress:{},video:{youtubeId:`evOnUDkq9f4`,channel:`Girls Gone Strong`},weightKind:`bodyweight`},"bicycle-crunch":{id:`bicycle-crunch`,name:`Bicycle Crunch`,muscles:`Abs, obliques`,equipment:[],setup:[`Lie on your back with your hands lightly behind your head and your knees lifted.`,`Press your lower back gently into the floor.`],steps:[`Bring one elbow toward the opposite knee while you straighten the other leg.`,`Switch sides slowly, like pedaling a bike.`,`Keep your shoulders lifted off the floor the whole time.`],mistakes:[`Pulling on your neck with your hands: keep them light.`,`Going fast, which uses momentum instead of your abs.`,`Letting your lower back arch off the floor.`],stress:{neckUpperBack:`high`,lowerBack:`moderate`},video:{youtubeId:`eqg47ZuGZXQ`,channel:`UCLA Health`},weightKind:`bodyweight`},"mountain-climber":{id:`mountain-climber`,name:`Mountain Climber`,muscles:`Abs, shoulders, hips`,equipment:[],setup:[`Start in a high plank with your hands under your shoulders and your body in one straight line.`],steps:[`Drive one knee toward your chest, then switch legs, like running in place on the floor.`,`Keep your hips level and your core tight. Start slowly and speed up only if your form holds.`],mistakes:[`Hips bouncing up and down.`,`Letting your lower back sag.`,`Shoulders drifting behind your hands.`],stress:{knees:`high`,wrists:`moderate`,shoulders:`moderate`},video:{youtubeId:`gW-q50V6Z_0`,channel:`Born Fitness`},weightKind:`bodyweight`}},a={"chin-tuck":{id:`chin-tuck`,name:`Chin Tuck`,muscles:`Deep neck muscles`,equipment:[],setup:[`Sit or stand tall with your shoulders relaxed and your eyes looking straight ahead.`],steps:[`Slide your head straight back, as if making a double chin. Keep your chin level, not nodding down.`,`Hold for about 3 seconds, then relax.`,`Repeat slowly.`],mistakes:[`Tipping your chin down or up instead of sliding straight back.`,`Shrugging your shoulders or holding your breath.`,`Pushing into pain: go only as far as a gentle stretch.`],stress:{},video:{youtubeId:`h_1-7H0eOfo`,channel:`PhysioExercise`},weightKind:`bodyweight`},"open-book":{id:`open-book`,name:`Open Book`,muscles:`Upper back, chest, shoulders`,equipment:[],setup:[`Lie on your side with your knees bent and stacked, and your arms straight out in front with palms together.`],steps:[`Keeping your knees together, lift the top arm and open it toward the ceiling and behind you, letting your eyes follow your hand.`,`Pause for a breath, then bring it back slowly.`,`Do all your reps, then switch sides.`],mistakes:[`Letting your knees and hips roll back: the turn should come from your upper back.`,`Forcing your arm to the floor: stop where it feels comfortable.`],stress:{},video:{youtubeId:`917w2gqZwZQ`,channel:`Petroski Physio`},weightKind:`bodyweight`},"wall-slide":{id:`wall-slide`,name:`Wall Slide`,muscles:`Upper back, shoulders`,equipment:[],setup:[`Stand with your heels a few inches from a wall and press your head, upper back and hips against it.`,`Bend your elbows and rest your forearms and the backs of your hands on the wall, like a goalpost.`],steps:[`Slowly slide your arms up the wall as far as you can keep contact.`,`Slide them back down with control.`],mistakes:[`Arching your lower back or flaring your ribs to reach higher.`,`Letting your forearms leave the wall: go only as high as you can keep contact.`],stress:{shoulders:`moderate`},video:{youtubeId:`Eaj_NG5_hIo`,channel:`British Elbow & Shoulder Society`},weightKind:`bodyweight`},"cat-cow":{id:`cat-cow`,name:`Cat-Cow`,muscles:`Spine, hips`,equipment:[],setup:[`Get on your hands and knees, with your hands under your shoulders and your knees under your hips.`,`Put a folded towel or mat under your knees if the floor is hard.`],steps:[`Breathe in and let your belly drop as you gently lift your chest and tailbone.`,`Breathe out and round your back toward the ceiling, tucking your chin and tailbone.`,`Move slowly, letting your breath lead.`],mistakes:[`Forcing a bigger arch than feels good.`,`Rushing: let each breath lead the movement.`],stress:{knees:`moderate`,wrists:`moderate`},video:{youtubeId:`xyNwxiuERXc`,channel:`FIT.nl`},weightKind:`bodyweight`},"figure-four-stretch":{id:`figure-four-stretch`,name:`Figure-4 Stretch`,muscles:`Glutes, hips`,equipment:[],setup:[`Lie on your back with your knees bent and feet flat.`,`Cross one ankle over the opposite knee to make a 4.`],steps:[`Keep your head and shoulders relaxed on the floor.`,`For more stretch, hold behind the lower thigh and draw it gently toward your chest.`,`Hold, breathing slowly, then switch sides.`],mistakes:[`Forcing the knee down.`,`Lifting your head or tensing your shoulders.`,`Stretching into sharp pain or tingling down your leg: stop if that happens.`],stress:{},video:{youtubeId:`PiJ_5AXTLOw`,channel:`Rapid Fitness`},weightKind:`bodyweight`,timedSeconds:{min:20,max:40}},"supine-twist":{id:`supine-twist`,name:`Lying Twist`,muscles:`Lower back, hips`,equipment:[],setup:[`Lie on your back with your knees bent and feet flat, arms out to the sides.`],steps:[`Let both knees fall slowly to one side while your shoulders stay on the floor.`,`Hold, breathing slowly, then bring them back and switch sides.`],mistakes:[`Letting the opposite shoulder lift off the floor.`,`Twisting past where it feels good: a pillow under your knees helps.`],stress:{},video:{youtubeId:`mNdJti7ZwKI`,channel:`Vive Health`},weightKind:`bodyweight`,timedSeconds:{min:20,max:40}}},o={...r,...i,...a},s={push:{title:`Push — chest, shoulders, triceps`,slots:[{label:`Chest`,options:[`machine-chest-press`,`dumbbell-bench-press`]},{label:`Shoulders`,options:[`machine-shoulder-press`,`seated-dumbbell-shoulder-press`]},{label:`Upper chest`,options:[`incline-dumbbell-press`,`cable-fly`,`pec-deck-fly`]},{label:`Triceps`,options:[`cable-tricep-pushdown`,`overhead-cable-extension`,`assisted-dip`]},{label:`Side shoulders`,options:[`dumbbell-lateral-raise`]},{label:`Chest squeeze`,options:[`pec-deck-fly`,`cable-fly`]}]},pull:{title:`Pull — back, biceps`,slots:[{label:`Upper back`,options:[`lat-pulldown`,`assisted-pullup`]},{label:`Mid back`,options:[`chest-supported-row`,`seated-cable-row`]},{label:`Rear shoulders`,options:[`face-pull`,`reverse-pec-deck`]},{label:`Biceps`,options:[`dumbbell-curl`,`cable-curl`]},{label:`Second back`,options:[`seated-cable-row`,`assisted-pullup`,`chest-supported-row`]},{label:`Biceps & forearms`,options:[`hammer-curl`,`cable-curl`]}]},legs:{title:`Legs + Abs`,slots:[{label:`Thighs`,options:[`leg-press`,`barbell-back-squat`,`goblet-squat`]},{label:`Glutes`,options:[`glute-bridge`,`dumbbell-romanian-deadlift`]},{label:`Hamstrings`,options:[`seated-leg-curl`,`dumbbell-romanian-deadlift`]},{label:`Core`,options:[`dead-bug`,`pallof-press`]},{label:`Outer glutes`,options:[`hip-abduction`]},{label:`Abs`,options:[`pallof-press`,`side-plank`,`cable-crunch`]},{label:`Front thighs`,options:[`leg-extension`]}]},home:{title:`At-home abs — no equipment`,slots:[{label:`Deep core`,options:[`home-dead-bug`]},{label:`Back side`,options:[`bird-dog`]},{label:`Front core`,options:[`forearm-plank`,`home-dead-bug`]},{label:`Obliques`,options:[`home-side-plank`]},{label:`Hips`,options:[`home-glute-bridge`]},{label:`Lower abs`,options:[`bicycle-crunch`,`forearm-plank`]},{label:`Challenge`,options:[`mountain-climber`,`bicycle-crunch`]}]},mobility:{title:`Mobility reset — neck, upper back, hips`,slots:[{label:`Neck`,options:[`chin-tuck`]},{label:`Upper back`,options:[`open-book`]},{label:`Shoulders`,options:[`wall-slide`]},{label:`Spine`,options:[`cat-cow`,`supine-twist`]},{label:`Hips`,options:[`figure-four-stretch`]},{label:`Lower back`,options:[`supine-twist`,`cat-cow`]}]}},c={chest:{label:`Chest`,day:`push`,slotLabels:[`Chest`,`Upper chest`,`Chest squeeze`],extraSlots:[]},shoulders:{label:`Shoulders`,day:`push`,slotLabels:[`Shoulders`,`Side shoulders`],extraSlots:[{label:`Rear shoulders`,options:[`face-pull`,`reverse-pec-deck`]}]},triceps:{label:`Triceps`,day:`push`,slotLabels:[`Triceps`],extraSlots:[{label:`More triceps`,options:[`overhead-cable-extension`,`cable-tricep-pushdown`,`assisted-dip`]}]},back:{label:`Back`,day:`pull`,slotLabels:[`Upper back`,`Mid back`,`Second back`],extraSlots:[]},biceps:{label:`Biceps`,day:`pull`,slotLabels:[`Biceps`,`Biceps & forearms`],extraSlots:[{label:`More biceps`,options:[`dumbbell-curl`,`cable-curl`,`hammer-curl`]}]}};function l(e){return Object.keys(c).filter(t=>c[t].day===e)}var u=[`Mon`,`Tue`,`Wed`,`Thu`,`Fri`,`Sat`,`Sun`],d=[`Monday`,`Tuesday`,`Wednesday`,`Thursday`,`Friday`,`Saturday`,`Sunday`];function f(r,i,a,o=0){let s=e(r),c=t(n(r),7*o),l=new Map;for(let t of a)l.set(e(new Date(t.date)),t.day);return Array.from({length:7},(n,r)=>{let a=t(c,r),o=e(a),u={key:o,date:a,weekdayIndex:r,isToday:o===s},d=l.get(o);if(d)return{...u,status:`done`,workout:d};let f=i[r];return f?o<s?{...u,status:`missed`,workout:f}:{...u,status:`planned`,workout:f}:{...u,status:`rest`,workout:null}})}var p=[`push`,`pull`,`legs`,`home`,`mobility`],m=[`push`,`pull`,`legs`,`home`],h=[`push`,`pull`,`legs`],g={new:4,some:5,experienced:7},_=`Pick a weight where the last 2 reps feel hard but your form stays clean.`,v={"lean-muscle":{new:{sets:3,repMin:10,repMax:12,restSeconds:90,tip:_},some:{sets:3,repMin:8,repMax:12,restSeconds:90,tip:_},experienced:{sets:4,repMin:8,repMax:12,restSeconds:90,tip:`Take the last set close to failure with good form.`}},strength:{new:{sets:3,repMin:8,repMax:10,restSeconds:120,tip:`Learn the movement before going heavy.`},some:{sets:4,repMin:6,repMax:8,restSeconds:120,tip:_},experienced:{sets:4,repMin:5,repMax:6,restSeconds:150,tip:_}},general:{new:{sets:2,repMin:12,repMax:15,restSeconds:60,tip:`Use a comfortable weight.`},some:{sets:3,repMin:12,repMax:15,restSeconds:60,tip:`Use a comfortable weight.`},experienced:{sets:3,repMin:12,repMax:15,restSeconds:60,tip:`Keep rests short.`}}};function ee(e){return`${e.sets} sets of ${e.repMin}–${e.repMax} reps, resting about ${e.restSeconds} seconds between sets. ${e.tip}`}function y(e,t){return e.timedSeconds?{...e.timedSeconds,unit:`seconds`}:{min:t.repMin,max:t.repMax,unit:`reps`}}var b={new:{sets:2,repMin:10,repMax:12,restSeconds:45,tip:`Go slowly: quality matters more than speed.`},some:{sets:3,repMin:10,repMax:15,restSeconds:45,tip:`Go slowly and keep your lower back steady.`},experienced:{sets:3,repMin:12,repMax:20,restSeconds:30,tip:`Keep tension in your abs the whole time.`}},te={sets:2,repMin:8,repMax:10,restSeconds:15,tip:`Move slowly and stop short of any pain.`},x=(e,t)=>({text:e,video:t}),S=(e,t)=>({youtubeId:e,channel:t}),C=e=>o[e].video,w=x(`One light set of your first exercise at about half your usual weight.`),T=x(`Arm circles: 10 forward, then 10 backward.`,S(`4TJv9YmECjc`,`Leap Fitness`)),E=x(`Cross-body arm swings: swing your arms wide open, then hug yourself, 10 times.`,S(`AsMMF3YWIIM`,`Live Lean TV`)),D=x(`Walking knee hugs: step forward and hug one knee to your chest, then the other, 10 steps in all.`,S(`m9vsPdnG3JQ`,`Total Health Systems`)),ne=x(`Pelvic tilts: on your back with knees bent, gently flatten your lower back to the floor and release, 10 reps.`,S(`n8DU1desCy8`,`Rehab My Patient`)),O=x(`Open books: lie on your side, knees bent, and slowly rotate your top arm open, 8 per side.`,C(`open-book`)),re=x(`Child's pose: sit back on your heels with your arms reaching forward and breathe slowly for 20–30 seconds.`,S(`LEW-CfuMCbw`,`Zion Physical Therapy`)),k={mobility:[x(`Take 5 slow breaths: in through your nose, out through your mouth, shoulders relaxed.`)],home:[x(`Cat-cow on the floor: 10 slow reps, staying in a pain-free range.`,C(`cat-cow`)),ne],push:[T,E,x(`Wall slides: stand with your back to a wall and slowly slide your arms up and down, 10 reps.`,C(`wall-slide`)),O,w],pull:[T,x(`Shoulder rolls: 10 slow rolls backward.`,S(`X7NtgY9kCCM`,`Rehab My Patient`)),x(`Cat-cow: on hands and knees, slowly round and arch your back, 10 reps, staying in a pain-free range.`,C(`cat-cow`)),O,w],legs:[x(`Leg swings: hold onto something steady and swing each leg forward and back 10 times, then side to side 10 times.`,S(`difYoBtZi2s`,`PureGym`)),x(`Hip circles: hands on hips, 10 slow circles each way.`,S(`qkrJXGVj_OQ`,`Live to Move Physical Therapy & Wellness`)),D,x(`Bodyweight glute bridges: 10 slow reps on a mat.`,C(`home-glute-bridge`)),w]},ie=x(`Cross-body shoulder stretch: pull one arm across your chest with the other. Each side.`,S(`aIq0fLi8iak`,`React Physical Therapy`)),ae={mobility:[x(`Lie on your back with your knees bent and take 5 slow, deep belly breaths.`)],home:[re,x(`Lying twist: on your back, let both knees fall to one side for 20–30 seconds. Each side.`,C(`supine-twist`)),x(`Slow breathing: lie on your back and take 5 slow, deep belly breaths.`)],push:[x(`Doorway chest stretch: forearm on a door frame or post, step through until you feel your chest stretch. Each side.`,S(`069o76BafTk`,`OMPT Specialists`)),ie,x(`Overhead triceps stretch: reach one hand down your back and gently press the elbow with the other hand. Each side.`,S(`cPTrm13hSSo`,`PureGym`))],pull:[x(`Lat stretch: hold a post at chest height and sit your hips back until you feel it along your side.`,S(`vuUFADwPkXs`,`Nick Brattain`)),ie,x(`Biceps stretch: palm flat on a wall behind you at shoulder height, then turn your body away. Each side.`,S(`BzPzDuIn1PA`,`LIVESTRONG`))],legs:[x(`Lying hamstring stretch: on your back, lift one straight leg and hold behind the thigh. Each side.`,S(`5P3E8Pec_L8`,`PureGym`)),x(`Figure-4 glute stretch: on your back, cross one ankle over the other knee and pull the bottom leg in. Each side.`,C(`figure-four-stretch`)),x(`Lying quad stretch: on your side, hold your top ankle and bring your heel toward you, only as far as is comfortable. Each side.`,S(`uRRwljV-Nlk`,`AskDoctorJo`))]},oe={neckUpperBack:[x(`Gentle neck stretch: tilt one ear toward your shoulder without pulling. Each side.`,S(`-r0eoFS7_5Q`,`AskDoctorJo`))],lowerBack:[x(`Knees to chest: on your back, hug both knees in gently and breathe slowly.`,S(`5R7eWaNWO3U`,`AskDoctorJo`))]},se={neckUpperBack:[x(`Chin tucks: sit tall and gently slide your chin straight back, 10 slow reps.`,C(`chin-tuck`)),O],lowerBack:[x(`Cat-cow on a mat: slowly round and arch your back, 10 reps, staying in a pain-free range.`,C(`cat-cow`))],knees:[x(`Keep the bike seat high enough that your knee is only slightly bent at the bottom.`)]},A={knees:`Go easy on your knees: use a shorter range and stop before any knee pain.`,lowerBack:`Go easy on your lower back: keep it pressed against the pad and lift lighter.`,neckUpperBack:`Go easy on your neck: keep your shoulders down and your head still.`,feet:`Go easy on your feet: keep your whole foot flat and wear supportive shoes.`,shoulders:`Go easy on your shoulders: use a smaller range and lighter weight.`,wrists:`Go easy on your wrists: keep them straight, not bent back.`};function ce(e,t){return e.equipment.every(e=>t.has(e))}function j(e,t){return t.filter(t=>e.stress[t]===`moderate`)}function M(e,t){return t.some(t=>e.stress[t]===`high`)}function le(e,t,n,r){return e.options.map(e=>o[e]).filter(e=>!r.has(e.id)&&!t.avoidedExerciseIds.includes(e.id)).filter(e=>ce(e,n)).filter(e=>!M(e,t.protectedAreas)).sort((e,n)=>j(e,t.protectedAreas).length-j(n,t.protectedAreas).length).map(n=>({exercise:n,slot:e,cautionAreas:j(n,t.protectedAreas)}))}function N(e,t,n,r){return le(e.slot,t,new Set(n),new Set([...r,e.exercise.id]))}function ue(e,t,n){if(e===`mobility`)return k.mobility;if(e===`home`){let e=t.protectedAreas.includes(`neckUpperBack`)?se.neckUpperBack??[]:[];return[x(`2 minutes of marching in place to warm up.`),...e,...k.home]}let r=[x(n?`2 minutes on the stationary bike at an easy pace, just to get warm.`:`2 minutes of brisk walking, just to get warm.`),...t.protectedAreas.flatMap(e=>se[e]??[]),...k[e]];return r.filter((e,t)=>!e.video||r.findIndex(t=>t.video?.youtubeId===e.video?.youtubeId)===t)}function de(e,t){return e===`home`?b[t.experience]:e===`mobility`?te:v[t.goal][t.experience]}function fe(e,t){return e===`mobility`?ae.mobility:[...ae[e],...t.protectedAreas.flatMap(e=>oe[e]??[])]}var pe={push:`Push`,pull:`Pull`};function me(e,t){let n=s[e],r=t?c[t]:null;if(!r||r.day!==e)return n.slots;let i=n.slots.filter(e=>r.slotLabels.includes(e.label)),a=n.slots.filter(e=>!r.slotLabels.includes(e.label));return[...i,...r.extraSlots,...a]}function he(e,t,n,r=null){let i=new Set(n),a=s[e],o=e===`mobility`?a.slots.length:g[t.experience],l=me(e,r).slice(0,o),u=new Set,d=[];for(let e of l){let[n]=le(e,t,i,u);n&&(u.add(n.exercise.id),d.push(n))}let f=ue(e,t,i.has(`bike`)),p=fe(e,t);return{day:e,title:r&&c[r].day===e?`${pe[e]} — ${c[r].label.toLowerCase()} focus`:a.title,prescription:de(e,t),warmUp:f,exercises:d,coolDown:p}}var P={push:`Push`,pull:`Pull`,legs:`Legs + Abs`,home:`At-home abs`,mobility:`Mobility reset`},ge={push:`Push`,pull:`Pull`,legs:`Legs`,home:`Home`,mobility:`Reset`};function F(e){return h.includes(e)}function _e(e){return F(e)?`Day ${h.indexOf(e)+1}`:`No gym`}function I(e,t,n){return`<h2 class="icon-title tone-${t}" data-icon="${e}">${n}</h2>`}function ve(e){return F(e)?`${_e(e)} ${P[e]}`:P[e]}function ye(e,t){return F(e)?`${_e(e)} · ${t}`:t}function be(e,t,n=p){return`<nav class="day-tabs" aria-label="${t}">${n.map(t=>`
      <button type="button" class="day-tab${t===e?` active`:``}" data-day="${t}" aria-pressed="${t===e}">
        <small class="day-number">${_e(t)}</small>${P[t]}
      </button>`).join(``)}</nav>`}function xe(e){return`https://www.youtube.com/watch?v=${e}`}function Se(e,t=``){return`<ul class="${t}">${e.map(e=>`<li>${e}</li>`).join(``)}</ul>`}function Ce(e,t=``){return`<ul class="${t}">${e.map(({text:e,video:t})=>{let n=e.split(`:`)[0];return`<li>${e}${t?` <a class="watch-link" href="${xe(t.youtubeId)}" target="_blank" rel="noopener noreferrer" aria-label="Watch a demo of ${L(n)}, by ${L(t.channel)}">Watch ↗</a>`:``}</li>`}).join(``)}</ul>`}function we(e){return e.cautionAreas.map(e=>`<p class="caution">${A[e]}</p>`).join(``)}function Te(e){let{exercise:t}=e,n=e=>`<ol>${e.map(e=>`<li>${e}</li>`).join(``)}</ol>`;return`
    <h3>Set up</h3>
    ${n(t.setup)}
    <h3>How to do it</h3>
    ${n(t.steps)}
    <h3>Avoid</h3>
    ${Se(t.mistakes,`mistakes`)}
    <a class="demo-link" href="${xe(t.video.youtubeId)}" target="_blank" rel="noopener noreferrer">
      Watch the demo video ↗<small>by ${t.video.channel}</small>
    </a>
  `}function L(e){return e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`).replace(/'/g,`&#39;`)}function Ee(e){let t=Math.floor(e/60),n=e%60;return`${t}:${String(n).padStart(2,`0`)}`}var De=`https://ashnasahni.github.io/gym-guide/`,Oe={time:`18:00`,minutes:60},ke=[30,45,60,90,120],Ae=[`MO`,`TU`,`WE`,`TH`,`FR`,`SA`,`SU`];function je(e){return/^([01]\d|2[0-3]):[0-5]\d$/.test(e)}function Me(e){return{time:e?.time!==void 0&&je(e.time)?e.time:Oe.time,minutes:e?.minutes!==void 0&&ke.includes(e.minutes)?e.minutes:Oe.minutes}}function R(e){return String(e).padStart(2,`0`)}function Ne(e){return`${`${e.getFullYear()}${R(e.getMonth()+1)}${R(e.getDate())}`}T${R(e.getHours())}${R(e.getMinutes())}00`}function Pe(e){return`${`${e.getUTCFullYear()}${R(e.getUTCMonth()+1)}${R(e.getUTCDate())}`}T${R(e.getUTCHours())}${R(e.getUTCMinutes())}${R(e.getUTCSeconds())}Z`}function Fe(e){return e.replace(/\\/g,`\\\\`).replace(/;/g,`\\;`).replace(/,/g,`\\,`).replace(/\r?\n/g,`\\n`)}function Ie(e){let t=new TextEncoder,n=[],r=``,i=0,a=75;for(let o of e){let e=t.encode(o).length;i+e>a&&(n.push(r),r=``,i=0,a=74),r+=o,i+=e}return n.push(r),n.join(`\r
 `)}function Le(e){return h.includes(e)?`${P[e]} day`:P[e]}function Re(e){let[t,n]=e.split(`:`).map(Number);return`${t%12==0?12:t%12}:${String(n).padStart(2,`0`)} ${t<12?`AM`:`PM`}`}function ze(e,t){return e.flatMap((e,n)=>e?[`${Le(e)} on ${d[n]} at ${Re(t.time)}`]:[])}function Be(e,n,r){let[i,a]=r.split(`:`).map(Number),o=t(e,(n-(e.getDay()+6)%7+7)%7);return o.setHours(i,a,0,0),o<=e?t(o,7):o}function Ve(e,t,n){return[`BEGIN:VCALENDAR`,`VERSION:2.0`,`PRODID:-//Gym Guide//Weekly plan//EN`,`CALSCALE:GREGORIAN`,`METHOD:PUBLISH`,`X-WR-CALNAME:Gym Guide`,...e.flatMap((e,r)=>{if(!e)return[];let i=Be(n,r,t.time),a=new Date(i.getTime()+t.minutes*6e4);return[`BEGIN:VEVENT`,`UID:gym-guide-${r}@ashnasahni.github.io`,`DTSTAMP:${Pe(n)}`,`DTSTART:${Ne(i)}`,`DTEND:${Ne(a)}`,`RRULE:FREQ=WEEKLY;BYDAY=${Ae[r]}`,`SUMMARY:${Fe(Le(e))}`,`DESCRIPTION:${Fe(`${s[e].title}\nOpen Gym Guide: ${De}`)}`,`END:VEVENT`]}),`END:VCALENDAR`].map(Ie).join(`\r
`)+`\r
`}var He=[{id:`dumbbells`,name:`Dumbbells`,hint:`Rack of free weights`},{id:`bench`,name:`Adjustable bench`,hint:`Flat or tilted bench`},{id:`mat`,name:`Floor mat`,hint:`Stretching / ab area`},{id:`cable`,name:`Cable machine`,hint:`Pulley tower with handles`},{id:`lat-pulldown`,name:`Lat pulldown`,hint:`Seated, pull a bar down`},{id:`seated-row`,name:`Seated cable row`,hint:`Seated, pull a handle in`},{id:`chest-press`,name:`Chest press machine`,hint:`Seated, push handles forward`},{id:`shoulder-press`,name:`Shoulder press machine`,hint:`Seated, push handles up`},{id:`pec-deck`,name:`Pec deck / rear delt fly`,hint:`Seated, arms swing together`},{id:`assisted-pullup`,name:`Assisted pull-up / dip`,hint:`Kneel on a pad that helps lift you`},{id:`leg-press`,name:`Leg press`,hint:`Seated, push a platform with your feet`},{id:`leg-curl`,name:`Leg curl machine`,hint:`Bend knees against a pad`},{id:`leg-extension`,name:`Leg extension machine`,hint:`Straighten knees against a pad`},{id:`hip-abduction`,name:`Hip abduction machine`,hint:`Seated, push knees outward`},{id:`squat-rack`,name:`Squat rack + barbell`,hint:`Barbell resting on hooks`},{id:`bike`,name:`Stationary bike`,hint:`For warm-ups`}],Ue=He.map(e=>e.id),We=[{title:`Free weights and floor`,ids:[`dumbbells`,`bench`,`mat`,`squat-rack`]},{title:`Upper body`,ids:[`cable`,`lat-pulldown`,`seated-row`,`chest-press`,`shoulder-press`,`pec-deck`,`assisted-pullup`]},{title:`Lower body`,ids:[`leg-press`,`leg-curl`,`leg-extension`,`hip-abduction`]},{title:`Warm-up`,ids:[`bike`]}];function Ge(e){return e.replace(/\s+/g,` `).trim().slice(0,120)}function Ke(e,t,n=!1){let r=`
      <div class="machine-note-row">
        <input id="note-${e}" type="text" maxlength="120" data-field="machine-note"
          data-exercise="${e}" value="${L(t)}" placeholder="Seat 4, pin at 60" autocomplete="off" />
        <button type="button" class="secondary" data-action="save-note" data-exercise="${e}">Save</button>
      </div>`;return n?`
    <details class="machine-note folded">
      <summary><span>My machine settings</span>${t?`<span class="hint">${L(t)}</span>`:``}</summary>${r}
    </details>`:`
    <div class="machine-note">
      <label for="note-${e}">My machine settings</label>${r}
    </div>`}var qe={easyWeeks:[],dismissedWeek:null},Je=6048e5;function z(t){return e(n(t))}function Ye(e){return n(new Date(e.getTime()-Je+432e5))}function Xe(e,t){return e.easyWeeks.includes(z(t))}function Ze(t,r,i){let a=new Map;for(let e of t){let t=z(new Date(e.date));a.set(t,(a.get(t)??0)+1)}let o=n(r);if(i.includes(e(o)))return 0;let s=0;for((a.get(e(o))??0)>=2&&(s+=1);;){o=Ye(o);let t=e(o);if(i.includes(t)||(a.get(t)??0)<2)return s;s+=1}}function Qe(e,t,n){return Xe(n,t)||n.dismissedWeek===z(t)?!1:Ze(e,t,n.easyWeeks)>=6}function $e(e,t){let n=z(t);return{...e,easyWeeks:e.easyWeeks.includes(n)?e.easyWeeks:[...e.easyWeeks,n]}}function et(e,t){let n=z(t);return{...e,easyWeeks:e.easyWeeks.filter(e=>e!==n)}}function tt(e,t){return{...e,dismissedWeek:z(t)}}var nt={waterGoal:8,proteinGoal:null,calorieGoal:null,days:{}},rt=6e3,it=3e3,at=[{name:`2 eggs`,grams:12},{name:`Chicken breast (palm-size)`,grams:30},{name:`Greek yogurt (1 cup)`,grams:20},{name:`Protein shake (1 scoop)`,grams:25},{name:`Paneer (100 g)`,grams:18},{name:`Tofu (half block)`,grams:20},{name:`Dal / lentils (1 cup)`,grams:18},{name:`Milk (1 glass)`,grams:8}],ot=[{name:`2 eggs`,kcal:140},{name:`Roti (1)`,kcal:100},{name:`Rice (1 cup cooked)`,kcal:205},{name:`Dal / lentils (1 cup)`,kcal:230},{name:`Banana`,kcal:105},{name:`Greek yogurt (1 cup)`,kcal:130},{name:`Paneer (100 g)`,kcal:265},{name:`Chicken breast (palm-size)`,kcal:165},{name:`Protein shake (1 scoop)`,kcal:120},{name:`Peanut butter (2 tbsp)`,kcal:190},{name:`Oats (1 cup cooked)`,kcal:150},{name:`Milk (1 glass)`,kcal:150}];function B(e,t){let n=e.days[t]??{};return{glasses:n.glasses??0,protein:n.protein??[],calories:n.calories??[]}}function st(e,t,n){return{...e,days:{...e.days,[t]:n}}}function ct(e,t,n){let r=B(e,t);return st(e,t,{...r,glasses:Math.max(0,r.glasses+n)})}function lt(e,t,n){let r=B(e,t);return st(e,t,{...r,protein:[...r.protein,n]})}function ut(e,t,n){let r=B(e,t);return st(e,t,{...r,protein:r.protein.filter((e,t)=>t!==n)})}function dt(e,t,n){let r=B(e,t);return st(e,t,{...r,calories:[...r.calories,n]})}function ft(e,t,n){let r=B(e,t);return st(e,t,{...r,calories:r.calories.filter((e,t)=>t!==n)})}function pt(e){return e.calories.reduce((e,t)=>e+t.kcal,0)}function mt(e,t){if(e.trim()===``)return`Type what you ate.`;let n=Number(t);return t.trim()===``||!Number.isInteger(n)||n<=0||n>it?`Enter the calories as a whole number, between 1 and ${it}.`:null}function ht(e){let t=Number(e);return e.trim()===``||!Number.isInteger(t)||t<500||t>6e3?`Enter a calorie goal as a whole number, between 500 and ${rt}.`:null}function gt(e){return e.protein.reduce((e,t)=>e+t.grams,0)}function _t(e,t){if(e.trim()===``)return`Type what you ate.`;let n=Number(t);return t.trim()===``||!Number.isFinite(n)||n<=0||n>300?`Enter the protein in grams, between 1 and 300.`:null}var vt=[{id:`lean-muscle`,label:`Build lean muscle`,detail:`Gain muscle for a toned look`},{id:`strength`,label:`Get stronger`,detail:`Lift heavier, fewer reps`},{id:`general`,label:`General fitness`,detail:`Lighter, steady routine`}],yt=[{id:`new`,label:`New to lifting`},{id:`some`,label:`Some experience`},{id:`experienced`,label:`Experienced`}],bt=[{id:`knees`,label:`Knees`},{id:`lowerBack`,label:`Lower back`},{id:`neckUpperBack`,label:`Neck / upper back`},{id:`feet`,label:`Feet / ankles`},{id:`shoulders`,label:`Shoulders`},{id:`wrists`,label:`Wrists`}],V={goal:`lean-muscle`,experience:`new`,protectedAreas:[],avoidedExerciseIds:[],weekPlan:[`push`,null,`pull`,null,`legs`,null,null],focusPlan:[null,null,null,null,null,null,null]};function xt(e){let t=[null,null,null,null,null,null,null];return[...e].filter(e=>Number.isInteger(e)&&e>=0&&e<=6).sort((e,t)=>e-t).forEach((e,n)=>{t[e]=h[n%h.length]}),t}function St(e){let{gymDays:t,...n}=e,r={...V,...n};if(!n.weekPlan&&Array.isArray(t)){let e=xt(t);e.some(Boolean)&&(r.weekPlan=e)}return r}function Ct(e){let t=vt.find(t=>t.id===e.goal)?.label.toLowerCase()??`general fitness`,n=e.weekPlan.filter(Boolean).length,r=[t,`${n} ${n===1?`day`:`days`} a week`],i=bt.filter(t=>e.protectedAreas.includes(t.id)).map(e=>e.label.toLowerCase());return i.length>0&&r.push(`protecting ${i.join(`, `)}`),`Planned for: ${r.join(` · `)}`}function wt(e,t){let n=Array.isArray(e)?e:[];return t.map((e,t)=>{let r=n[t];return typeof r==`string`&&r in c&&c[r].day===e?r:null})}var Tt=[`lb`,`kg`],Et=2.2046226218;function H(e,t){return t===`kg`?Math.round(e/Et*2)/2:e}function Dt(e,t){return t===`kg`?Math.round(e*Et*100)/100:e}function U(e){return Number.isInteger(e)?String(e):e.toFixed(1)}function Ot(e,t){return`${U(H(e,t))} ${t}`}function kt(e){return e===`kg`?2.5:5}function At(e){return e===`kg`?`kilograms`:`pounds`}var jt=`gymGuide.v1`;function Mt(){return{profile:null,equipmentIds:[...Ue],equipmentConfirmed:!1,history:{},session:null,nutrition:nt,workoutLog:[],calendar:Oe,recovery:[],lastBackupAt:null,weightUnit:`lb`,deload:{...qe,easyWeeks:[]},machineNotes:{}}}var Nt=5e3,Pt=50,Ft=60,It=/^[A-Za-z0-9][A-Za-z0-9_-]{0,59}$/,Lt=/^\d{4}-\d{2}-\d{2}$/;function W(e){return typeof e==`object`&&!!e&&!Array.isArray(e)}function Rt(e){return typeof e==`string`&&It.test(e)}function G(e,t,n){return typeof e==`number`&&Number.isFinite(e)&&e>=t&&e<=n}function zt(e,t,n){return G(e,t,n)&&Number.isInteger(e)}function Bt(e){return typeof e==`string`&&e.length<=40&&!Number.isNaN(Date.parse(e))}function Vt(e){return typeof e==`string`&&Lt.test(e)&&!Number.isNaN(Date.parse(e))}function K(e){return Array.isArray(e)?e.slice(0,Nt):[]}function Ht(e){if(!W(e))return null;let t=e.weight===null?null:G(e.weight,0,1e3)?e.weight:void 0;return t===void 0||!G(e.amount,0,1e4)?null:{weight:t,amount:e.amount}}function Ut(e){let t={};if(!W(e))return t;for(let[n,r]of Object.entries(e)){if(!Rt(n)||typeof r!=`string`)continue;let e=Ge(r);e&&(t[n]=e)}return t}function Wt(e){let t={};if(!W(e))return t;for(let[n,r]of Object.entries(e)){if(!Rt(n))continue;let e=[];for(let t of K(r)){if(!W(t)||!Bt(t.date))continue;let n=K(t.sets).slice(0,Pt).map(Ht).filter(e=>e!==null);e.push({date:t.date,sets:n})}e.length>0&&(t[n]=e)}return t}function Gt(e){let t=p;return K(e).flatMap(e=>W(e)&&Bt(e.date)&&typeof e.day==`string`&&t.includes(e.day)?[{date:e.date,day:e.day}]:[])}function Kt(e){return K(e).flatMap(e=>{if(!W(e)||!Vt(e.date)||!zt(e.feel,1,5))return[];let t=e.hours===null?null:G(e.hours,0,24)?e.hours:null,n=e.readiness===null?null:G(e.readiness,0,100)?e.readiness:null;return[{date:e.date,feel:e.feel,hours:t,readiness:n}]})}function qt(e){if(typeof e!=`string`)return null;let t=e.trim().slice(0,Ft);return t===``?null:t}function Jt(e){let t=W(e)?e:{},n=K(t.protein).flatMap(e=>{let t=W(e)?qt(e.name):null;return W(e)&&t&&G(e.grams,0,300)?[{name:t,grams:e.grams}]:[]}),r=K(t.calories).flatMap(e=>{let t=W(e)?qt(e.name):null;return W(e)&&t&&G(e.kcal,0,3e3)?[{name:t,kcal:e.kcal}]:[]});return{glasses:zt(t.glasses,0,100)?t.glasses:0,protein:n,calories:r}}function Yt(e){let t=W(e)?e:{},n={};if(W(t.days))for(let[e,r]of Object.entries(t.days))Vt(e)&&(n[e]=Jt(r));return{waterGoal:zt(t.waterGoal,1,20)?t.waterGoal:nt.waterGoal,proteinGoal:zt(t.proteinGoal,1,400)?t.proteinGoal:null,calorieGoal:zt(t.calorieGoal,500,6e3)?t.calorieGoal:null,days:n}}function Xt(e){let t=p;return!Array.isArray(e)||e.length!==7?[...V.weekPlan]:e.map(e=>typeof e==`string`&&t.includes(e)?e:null)}function Zt(e){if(!W(e))return null;let t=St(e),n=Xt(t.weekPlan),r=vt.map(e=>e.id),i=yt.map(e=>e.id),a=bt.map(e=>e.id);return{goal:r.includes(t.goal)?t.goal:V.goal,experience:i.includes(t.experience)?t.experience:V.experience,protectedAreas:K(t.protectedAreas).filter(e=>typeof e==`string`&&a.includes(e)),avoidedExerciseIds:K(t.avoidedExerciseIds).filter(Rt),weekPlan:n,focusPlan:wt(t.focusPlan,n)}}function Qt(e){let t=W(e)?e:{};return{easyWeeks:K(t.easyWeeks).filter(Vt).slice(-200),dismissedWeek:Vt(t.dismissedWeek)?t.dismissedWeek:null}}function $t(e,t={}){let n=Mt();if(!W(e))return n;let r=e;return{profile:Zt(r.profile),equipmentIds:Array.isArray(r.equipmentIds)&&r.equipmentIds.every(e=>typeof e==`string`)?K(r.equipmentIds).filter(Rt):n.equipmentIds,equipmentConfirmed:r.equipmentConfirmed===!0,history:Wt(r.history),session:t.keepSession&&W(r.session)?r.session:null,nutrition:Yt(r.nutrition),workoutLog:Gt(r.workoutLog),calendar:Me(W(r.calendar)?r.calendar:void 0),recovery:Kt(r.recovery),lastBackupAt:Bt(r.lastBackupAt)?r.lastBackupAt:null,weightUnit:Tt.find(e=>e===r.weightUnit)??n.weightUnit,deload:Qt(r.deload),machineNotes:Ut(r.machineNotes)}}function en(){try{let e=localStorage.getItem(jt);return e?$t(JSON.parse(e),{keepSession:!0}):Mt()}catch{return Mt()}}var tn=!1,nn=null;function rn(){return tn}function an(e){nn=e}function q(e){let t=!0;try{localStorage.setItem(jt,JSON.stringify(e))}catch{t=!1}return tn===t&&(tn=!t,nn?.()),t}var on=`gym-guide`,sn=1;function cn(t,n){let r={app:on,format:sn,savedAt:n.toISOString(),state:{...t,session:null}};return{fileName:`gym-guide-backup-${e(n)}.json`,text:JSON.stringify(r,null,2)}}function ln(e){if(e.length>5e6)return{ok:!1,error:`That file is too big to be a Gym Guide backup.`};let t;try{t=JSON.parse(e)}catch{return{ok:!1,error:`That file isn't a Gym Guide backup. Pick the .json file you saved from this app.`}}let n=t;if(typeof n!=`object`||!n||n.app!==on||typeof n.state!=`object`||n.state===null)return{ok:!1,error:`That file isn't a Gym Guide backup. Pick the .json file you saved from this app.`};if(n.format!==sn)return{ok:!1,error:`That backup is from a different version of the app, so it can't be restored here.`};let r=$t(n.state);return{ok:!0,state:r,summary:{workouts:r.workoutLog.length,savedAt:typeof n.savedAt==`string`?n.savedAt:null}}}function un(e){return new Date(e).toLocaleDateString(void 0,{month:`short`,day:`numeric`})}function dn(e,t,n){let r=e?`Last backup: ${un(e)}.`:`You haven't made a backup yet.`,i=``;if(t.kind===`error`)i=`<p class="form-error" role="alert">${L(t.message)}</p>`;else if(t.kind===`confirm`){let{workouts:e,savedAt:n}=t.summary;i=`
      <p class="notice">This backup ${n?`from ${un(n)} `:``}has ${e} finished ${e===1?`workout`:`workouts`}. Restoring replaces everything on this phone right now.</p>
      <div class="button-row">
        <button type="button" class="secondary" data-action="cancel-restore">Cancel</button>
        <button type="button" class="primary" data-action="confirm-restore">Replace my data</button>
      </div>`}return n?`
    <section class="card backup-card">
      <h2>Already used this app?</h2>
      <p class="hint">If you saved a backup file, restore it here to get your workouts, weights and settings back.</p>
      <button type="button" class="secondary" data-action="choose-backup">Restore from a backup</button>
      <input type="file" data-field="restore-file" hidden />
      ${i}
    </section>`:`
    <section class="card backup-card">
      <h2>Back up your data</h2>
      <p class="hint">Your workouts live only on this phone. Save a backup file now and then and keep it somewhere safe, like emailed to yourself or in Google Drive. It includes your profile and protected areas, so keep it private.</p>
      <p class="hint small">${r}</p>
      <button type="button" class="secondary" data-action="save-backup">Save a backup</button>
      <button type="button" class="link-button center" data-action="choose-backup">Restore from a backup</button>
      <input type="file" data-field="restore-file" hidden />
      ${i}
    </section>`}var fn=0;function pn(e,t){if(!(`speechSynthesis`in window))return;window.speechSynthesis.cancel();let n=new SpeechSynthesisUtterance(e);n.rate=1;let r=++fn;n.onstart=()=>t?.onStart();let i=()=>{r===fn&&t?.onEnd()};n.onend=i,n.onerror=i,window.speechSynthesis.speak(n)}function mn(e,t,n){let r=URL.createObjectURL(new Blob([n],{type:t})),i=document.createElement(`a`);i.href=r,i.download=e,document.body.appendChild(i),i.click(),i.remove(),window.setTimeout(()=>URL.revokeObjectURL(r),1e4)}function hn(e){`vibrate`in navigator&&navigator.vibrate(e)}var gn=null,_n=!1;async function vn(){if(`wakeLock`in navigator&&document.visibilityState===`visible`)try{gn=await navigator.wakeLock.request(`screen`)}catch{gn=null}}document.addEventListener(`visibilitychange`,()=>{_n&&document.visibilityState===`visible`&&vn()});function yn(e){_n=e,e?vn():(gn?.release(),gn=null)}function bn(e){let{state:t}=e,n={kind:`none`},r=null;function i(){let n=new Date;t.lastBackupAt=n.toISOString();let{fileName:r,text:i}=cn(t,n);q(t),mn(r,`application/json`,i),e.render(),e.showToast(`Backup saved. Keep the file somewhere safe.`)}function a(t){let i=new FileReader;i.onload=()=>{let t=ln(String(i.result??``));t.ok?(r={state:t.state,summary:t.summary},n={kind:`confirm`,summary:t.summary}):(r=null,n={kind:`error`,message:t.error}),e.render()},i.onerror=()=>{n={kind:`error`,message:`Couldn't read that file. Try picking it again.`},e.render()},i.readAsText(t)}function o(){if(!r)return;e.music.stop(),Object.assign(t,r.state),r=null,n={kind:`none`},e.resetCalendarSelection();let i=q(t);e.go(t.profile&&t.equipmentConfirmed?`today`:`profile`),e.showToast(i?`Backup restored.`:`Restored, but couldn't save on this device — changes last until you close the page.`)}return{card:e=>dn(t.lastBackupAt,n,e),handleAction(t){if(t===`save-backup`)i();else if(t===`choose-backup`)n={kind:`none`},e.root.querySelector(`input[data-field="restore-file"]`)?.click();else if(t===`cancel-restore`)r=null,n={kind:`none`},e.render();else if(t===`confirm-restore`)o();else return!1;return!0},handleFileChosen:a}}function xn(e){let{root:t,state:n}=e,r=t.querySelector(`input[data-field="cal-time"]`)?.value??``;if(!je(r))return e.showToast(`Pick a start time first.`),null;let i=Number(t.querySelector(`select[data-field="cal-minutes"]`)?.value);n.calendar={time:r,minutes:ke.includes(i)?i:n.calendar.minutes},q(n);let a=(n.profile??V).weekPlan;return mn(`gym-guide-week.ics`,`text/calendar;charset=utf-8`,Ve(a,n.calendar,new Date)),ze(a,n.calendar)}function Sn(e,t,n=null){let r=ke.map(t=>`<option value="${t}"${t===e.minutes?` selected`:``}>${t} minutes</option>`).join(``);return`
    <section class="card">
      <h2>Add to your calendar</h2>
      <p class="hint">Adds your workout days as weekly repeating events. Tap the button, then open the file it downloads and your calendar app will offer to add them.</p>
      <div class="calendar-fields">
        <label class="calendar-field">
          <span>Start time</span>
          <input type="time" data-field="cal-time" value="${e.time}" />
        </label>
        <label class="calendar-field">
          <span>Length</span>
          <select data-field="cal-minutes">${r}</select>
        </label>
      </div>
      ${t?`<p class="notice">You changed your week. Tap Save profile below first, then add it to your calendar.</p>`:``}
      ${n&&!t?Cn(n):``}
      <button type="button" class="secondary" data-action="add-to-calendar"${t?` disabled`:``}>Add to calendar</button>
      <p class="hint small">This is a one-time copy. If you change your week later, delete the old events in your calendar and add it again. The events repeat every week until you delete them.</p>
    </section>
  `}function Cn(e){return`
    <div class="notice" role="status">
      <p><strong>✓ File downloaded.</strong> Next, open it (from your downloads or the browser's download bar) and tap Add all in your calendar app. It holds:</p>
      <ul>${e.map(e=>`<li>${e}</li>`).join(``)}</ul>
    </div>`}function wn(e){return e.toLocaleDateString(void 0,{month:`long`,day:`numeric`})}function Tn(e){return e.isToday?`Today`:`${d[e.weekdayIndex]}, ${wn(e.date)}`}function En(e){let t=e.status===`done`&&e.workout?`${P[e.workout]} workout, done`:e.status===`planned`&&e.workout?`${P[e.workout]} planned`:e.status===`missed`&&e.workout?`${P[e.workout]} planned, not logged`:`rest day`;return`${d[e.weekdayIndex]} ${wn(e.date)}, ${t}${e.isToday?`, today`:``}`}function Dn(e){return e.toLocaleDateString(void 0,{month:`short`,day:`numeric`})}function On(e,t){return t===0?`This week`:t===1?`Next week`:t===-1?`Last week`:`${Dn(e[0].date)} – ${Dn(e[6].date)}`}function kn(e,t,n=0){let r=e.map(e=>{let n=e.workout?ge[e.workout]:`Rest`,r=e.status===`done`?`✓`:e.status===`missed`?`○`:``;return`
        <button type="button" class="${[`cal-day`,e.workout?`type-${e.workout}`:``,`cal-${e.status}`,e.isToday?`today`:``,e.key===t?`selected`:``].filter(Boolean).join(` `)}" data-date="${e.key}"
                aria-pressed="${e.key===t}" aria-label="${En(e)}">
          <span class="cal-weekday">${u[e.weekdayIndex]}</span>
          <span class="cal-date">${e.date.getDate()}</span>
          <span class="cal-label">${n}</span>
          <span class="cal-mark" aria-hidden="true">${r}</span>
        </button>`}).join(``),i=On(e,n);return`
    <div class="week-nav">
      <button type="button" class="week-step" data-action="week-prev" aria-label="Previous week"${n<=-4?` disabled`:``}>‹</button>
      ${n===0?`<span class="week-title">${i}</span>`:`<button type="button" class="link-button week-title" data-action="week-today" aria-label="${i}. Tap to go back to this week">${i}</button>`}
      <button type="button" class="week-step" data-action="week-next" aria-label="Next week"${n>=12?` disabled`:``}>›</button>
    </div>
    <div class="calendar" role="group" aria-label="${i}">${r}</div>
  `}function An(e,t,n,r){return`
    <section class="card home-card">
      <h2>${e} <small>optional</small></h2>
      <p class="home-blurb">${t}</p>
      ${r?`<button type="button" class="secondary" data-day="${n}">Do ${P[n].toLowerCase()}</button>`:`<p class="hint">You can start it on the day.</p>`}
    </section>`}function jn(e){return`
    <section class="card">
      <p>Rest day. Your muscles grow while you recover, so a walk or some stretching is plenty.</p>
    </section>

    ${An(`At-home abs`,`About 10 minutes, no equipment, gentle on your back and knees. Same voice and timer as a gym workout.`,`home`,e.isToday)}

    ${An(`Mobility reset`,`About 8 minutes of slow stretches for your neck, upper back and hips. No equipment.`,`mobility`,e.isToday)}

    ${e.isToday?`<section class="card">
             <p class="picker-hint">Want a gym workout instead?</p>
             ${be(null,`Pick a gym workout for today`,h)}
           </section>`:``}`}function Mn(e,t){return t.flatMap((t,n)=>t&&e[n]?[`${u[n]} ${c[t].label.toLowerCase()}`]:[]).join(` · `)}function Nn(e,t,n,r){let i=l(n);if(i.length===0)return``;let a=[null,...i].map(n=>{let i=n?c[n].label:`Balanced`;return`<button type="button" class="focus-chip${n===r?` active`:``}"
          data-focus-day="${t}" data-focus="${n??`balanced`}"
          aria-pressed="${n===r}" aria-label="${e} focus: ${i}">${i}</button>`}).join(``);return`<p class="plan-focus-day">${`${e} · ${n?ge[n]:``}`}</p><div class="plan-focus" role="group" aria-label="${e} focus">${a}</div>`}function Pn(e,t,n=!1){let r=[{value:`rest`,label:`Rest`,spoken:`Rest`},...m.map(e=>({value:e,label:ge[e],spoken:P[e]}))];return`<div class="plan-editor">${d.map((t,n)=>{let i=e[n]??`rest`,a=r.map(e=>`
          <button type="button" class="plan-option${e.value===i?` active`:``}"
                  data-plan-day="${n}" data-plan-workout="${e.value}"
                  aria-pressed="${e.value===i}" aria-label="${t}: ${e.spoken}">${e.label}</button>`).join(``);return`
      <div class="plan-row">
        <span class="plan-day"><span aria-hidden="true">${t.slice(0,3)}</span><span class="sr-only">${t}</span></span>
        <div class="plan-options">${a}</div>
      </div>`}).join(``)}</div>${Fn(e,t,n)}`}function Fn(e,t,n){let r=d.map((n,r)=>Nn(n,r,e[r],t[r]??null)).join(``);if(!r)return``;let i=Mn(e,t);return`
    <details class="focus-picker"${n?` open`:``}>
      <summary><span>Focus (optional)</span>${i?`<span class="hint">${i}</span>`:``}</summary>
      <p class="hint">Lean a Push or Pull day toward one muscle.</p>
      ${r}
    </details>`}function In(){return`
    <section class="card row-card easy-week-card">
      <div>
        <h2>Easy week</h2>
        <p class="hint">Fewer sets, same weights, until Sunday.</p>
      </div>
      <button type="button" class="secondary" data-action="easy-week-end">Turn off</button>
    </section>`}function Ln(e){return`
    <section class="card easy-week-card">
      <h2>Time for an easy week?</h2>
      <p>You've trained ${e} weeks in a row. An easier week (one fewer set, same weights) can help you recover and come back stronger. It's optional.</p>
      <div class="button-row">
        <button type="button" class="secondary" data-action="easy-week-dismiss">Not now</button>
        <button type="button" class="primary" data-action="easy-week-start">Make this week easier</button>
      </div>
      <p class="hint small">A training suggestion, not medical advice.</p>
    </section>`}function Rn(e){return`data-${e.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`)}`}function zn(e){return`"${e.replace(/["\\]/g,`\\$&`)}"`}function Bn(e,t){if(!(e instanceof HTMLElement)||e===t||!t.contains(e))return null;let n=Object.entries(e.dataset).map(([e,t])=>`[${Rn(e)}=${zn(t??``)}]`);return n.length===0?null:`${e.tagName.toLowerCase()}${n.join(``)}`}function Vn(e,t){e.querySelector(t)?.focus({preventScroll:!0})}function Hn(e){let t=e.querySelector(`main h1`);t&&(t.tabIndex=-1,t.focus({preventScroll:!0}))}var Un={name:``,grams:``,goal:``,error:``,calorieName:``,calories:``,calorieGoal:``,calorieError:``,proteinQuickOpen:!1,calorieQuickOpen:!1,proteinGoalOpen:!1,calorieGoalOpen:!1};function Wn(e,t){return`<div class="meter" role="progressbar" aria-valuemin="0" aria-valuemax="${t}" aria-valuenow="${e}">
    <div class="meter-fill" style="width: ${Math.min(100,Math.round(e/t*100))}%"></div>
  </div>`}function Gn(e,t){let n=e.waterGoal;return`
    <section class="card fuel-water">
      <h2>Water</h2>
      <p class="fuel-total"><strong>${t}</strong> of ${n} glasses${t>=n?` — goal reached!`:``}</p>
      ${Wn(t,n)}
      <div class="button-row fuel-buttons">
        <button type="button" class="secondary" data-action="water" data-delta="-1" ${t===0?`disabled`:``} aria-label="Remove a glass">−1</button>
        <button type="button" class="primary" data-action="water" data-delta="1">+1 glass</button>
      </div>
      <div class="goal-row">
        <span>Daily goal</span>
        <button type="button" class="step-button small" data-action="water-goal" data-delta="-1" aria-label="Lower water goal">−</button>
        <span>${n} glasses</span>
        <button type="button" class="step-button small" data-action="water-goal" data-delta="1" aria-label="Raise water goal">+</button>
      </div>
    </section>
  `}function Kn(e){return e.proteinGoalOpen?`
    <p class="hint">A common target for building muscle is about 0.7 g per pound of body weight. A doctor or dietitian can tell you what's right for you.</p>
    <div class="inline-form">
      <input type="number" inputmode="numeric" min="1" placeholder="e.g. 100" value="${L(e.goal)}" data-field="protein-goal" aria-label="Daily protein goal in grams" />
      <span>g</span>
      <button type="button" class="secondary" data-action="set-protein-goal">Set goal</button>
    </div>
  `:`<button type="button" class="link-button" data-action="show-protein-goal">Set a daily goal (optional)</button>`}function qn(e,t,n){let r=B(e,t),i=gt(r),a=e.proteinGoal,o=a===null?`<p class="fuel-total"><strong>${i}</strong> g today</p>`:`<p class="fuel-total"><strong>${i}</strong> of ${a} g${i>=a?` — goal reached!`:``}</p>${Wn(i,a)}`,s=r.protein.length===0?`<p class="hint">Nothing logged yet today. Tap Add food.</p>`:`<ul class="entry-list">${r.protein.map((e,t)=>`
          <li>
            <span>${L(e.name)}</span>
            <span class="entry-grams">${e.grams} g</span>
            <button type="button" class="link-button" data-action="remove-protein" data-index="${t}" aria-label="Remove ${L(e.name)}">Remove</button>
          </li>`).join(``)}</ul>`,c=at.map((e,t)=>`
      <button type="button" class="chip quick-food" data-action="quick-protein" data-index="${t}">
        <span>${e.name}</span><small>~${e.grams} g</small>
      </button>`).join(``);return`
    <section class="card fuel-protein">
      <h2>Protein</h2>
      ${o}
      ${s}

      <details class="quick-add" data-quick="protein"${n.proteinQuickOpen||n.error&&!n.proteinGoalOpen?` open`:``}>
        <summary>Add food</summary>
        <div class="quick-grid">${c}</div>
        <p class="hint small">Amounts are rough averages for a typical serving.</p>
        <h3>Something else</h3>
        <div class="inline-form">
          <input type="text" placeholder="What you ate" value="${L(n.name)}" data-field="protein-name" aria-label="Food name" maxlength="60" />
          <input type="number" inputmode="numeric" min="1" placeholder="g" value="${L(n.grams)}" data-field="protein-grams" aria-label="Protein in grams" class="grams-input" />
          <button type="button" class="secondary" data-action="add-protein">Add</button>
        </div>
        ${n.error&&!n.proteinGoalOpen?`<p class="form-error" role="alert">${n.error}</p>`:``}
      </details>
      ${n.error&&n.proteinGoalOpen?`<p class="form-error" role="alert">${n.error}</p>`:``}

      ${a===null?Kn(n):`<button type="button" class="link-button" data-action="clear-protein-goal">Change protein goal (${a} g)</button>`}
    </section>
  `}function Jn(e){return e.calorieGoalOpen?`
    <p class="hint">A doctor or dietitian can tell you what's right for you.</p>
    <div class="inline-form">
      <input type="number" inputmode="numeric" min="1" placeholder="e.g. 2400" value="${L(e.calorieGoal)}" data-field="calorie-goal" aria-label="Daily calorie goal" />
      <span>cal</span>
      <button type="button" class="secondary" data-action="set-calorie-goal">Set goal</button>
    </div>
  `:`<button type="button" class="link-button" data-action="show-calorie-goal">Set a daily goal (optional)</button>`}function Yn(e,t,n){let r=B(e,t),i=pt(r),a=e.calorieGoal,o=a===null?`<p class="fuel-total"><strong>${i}</strong> cal today</p>`:`<p class="fuel-total"><strong>${i}</strong> of ${a} cal${i>=a?` — goal reached!`:``}</p>${Wn(i,a)}`,s=r.calories.length===0?`<p class="hint">Nothing logged yet today. Tap Add food.</p>`:`<ul class="entry-list">${r.calories.map((e,t)=>`
          <li>
            <span>${L(e.name)}</span>
            <span class="entry-grams">${e.kcal} cal</span>
            <button type="button" class="link-button" data-action="remove-calories" data-index="${t}" aria-label="Remove ${L(e.name)} calories">Remove</button>
          </li>`).join(``)}</ul>`,c=ot.map((e,t)=>`
      <button type="button" class="chip quick-food" data-action="quick-calories" data-index="${t}">
        <span>${e.name}</span><small>~${e.kcal} cal</small>
      </button>`).join(``);return`
    <section class="card fuel-calories">
      <h2>Calories</h2>
      ${o}
      ${s}

      <details class="quick-add" data-quick="calories"${n.calorieQuickOpen||n.calorieError&&!n.calorieGoalOpen?` open`:``}>
        <summary>Add food</summary>
        <div class="quick-grid">${c}</div>
        <p class="hint small">Amounts are rough averages for a typical serving. Use the box below if you know the real number.</p>
        <h3>Something else</h3>
        <div class="inline-form">
          <input type="text" placeholder="What you ate" value="${L(n.calorieName)}" data-field="calorie-name" aria-label="Food name for calories" maxlength="60" />
          <input type="number" inputmode="numeric" min="1" placeholder="cal" value="${L(n.calories)}" data-field="calorie-amount" aria-label="Calories" class="grams-input" />
          <button type="button" class="secondary" data-action="add-calories">Add</button>
        </div>
        ${n.calorieError&&!n.calorieGoalOpen?`<p class="form-error" role="alert">${n.calorieError}</p>`:``}
      </details>
      ${n.calorieError&&n.calorieGoalOpen?`<p class="form-error" role="alert">${n.calorieError}</p>`:``}

      ${a===null?Jn(n):`<button type="button" class="link-button" data-action="clear-calorie-goal">Change calorie goal (${a} cal)</button>`}
    </section>
  `}function Xn(e,t,n){return`
    <header class="screen-header">
      <h1>Fuel</h1>
      <p class="lead">Tap to log water, protein and calories. Today's log starts fresh at midnight.</p>
    </header>
    ${Gn(e,B(e,t).glasses)}
    ${qn(e,t,n)}
    ${Yn(e,t,n)}
  `}function Zn(t){let{root:n,state:r}=t,i={...Un};function a(e){return n.querySelector(`input[data-field="${e}"]`)?.value??``}function o(){i={name:a(`protein-name`),grams:a(`protein-grams`),goal:a(`protein-goal`),error:``,calorieName:a(`calorie-name`),calories:a(`calorie-amount`),calorieGoal:a(`calorie-goal`),calorieError:``,proteinQuickOpen:n.querySelector(`details[data-quick="protein"]`)?.open??i.proteinQuickOpen,calorieQuickOpen:n.querySelector(`details[data-quick="calories"]`)?.open??i.calorieQuickOpen,proteinGoalOpen:i.proteinGoalOpen,calorieGoalOpen:i.calorieGoalOpen}}function s(n,a,s){o();let c=e(new Date),l=r.nutrition;if(n===`water`)r.nutrition=ct(l,c,Number(a));else if(n===`water-goal`)r.nutrition={...l,waterGoal:Math.min(20,Math.max(1,l.waterGoal+Number(a)))};else if(n===`quick-protein`){let e=at[Number(s)];e&&(r.nutrition=lt(l,c,e))}else if(n===`add-protein`){let e=_t(i.name,i.grams);e?i.error=e:(r.nutrition=lt(l,c,{name:i.name.trim(),grams:Number(i.grams)}),i={...i,name:``,grams:``})}else if(n===`remove-protein`)r.nutrition=ut(l,c,Number(s));else if(n===`show-protein-goal`)i.proteinGoalOpen=!0;else if(n===`show-calorie-goal`)i.calorieGoalOpen=!0;else if(n===`set-protein-goal`){let e=Number(i.goal);!Number.isInteger(e)||e<1||e>400?i.error=`Enter a protein goal in whole grams, between 1 and 400.`:(r.nutrition={...l,proteinGoal:e},i.proteinGoalOpen=!1)}else if(n===`clear-protein-goal`)i.goal=String(l.proteinGoal??``),i.proteinGoalOpen=!0,r.nutrition={...l,proteinGoal:null};else if(n===`quick-calories`){let e=ot[Number(s)];e&&(r.nutrition=dt(l,c,e))}else if(n===`add-calories`){let e=mt(i.calorieName,i.calories);e?i.calorieError=e:(r.nutrition=dt(l,c,{name:i.calorieName.trim(),kcal:Number(i.calories)}),i={...i,calorieName:``,calories:``})}else if(n===`remove-calories`)r.nutrition=ft(l,c,Number(s));else if(n===`set-calorie-goal`){let e=ht(i.calorieGoal);e?i.calorieError=e:(r.nutrition={...l,calorieGoal:Number(i.calorieGoal)},i.calorieGoalOpen=!1)}else n===`clear-calorie-goal`&&(i.calorieGoal=String(l.calorieGoal??``),i.calorieGoalOpen=!0,r.nutrition={...l,calorieGoal:null});q(r)||(i.error=`Couldn't save on this device.`),t.render()}return{screen:()=>Xn(r.nutrition,e(new Date),i),handleAction:s}}var Qn=e=>`<svg class="nav-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">${e}</svg>`,$n={today:Qn(`<path d="M6.5 6.5v11M17.5 6.5v11M3.5 9v6M20.5 9v6M6.5 12h11" />`),progress:Qn(`<path d="M4 4v16h16M8 15l4-5 3 3 5-7" />`),fuel:Qn(`<path d="M12 3c3 4.2 6 7.2 6 11a6 6 0 0 1-12 0c0-3.8 3-6.8 6-11z" />`),profile:Qn(`<circle cx="12" cy="8" r="4" /><path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7" />`)},J=[{title:`Your week`,text:`Tap a day to see its workout. Swipe sideways to look at other weeks.`,target:`.calendar`},{title:`Start workout`,text:`At the gym, tap this. It talks you through every set and times your rest.`,target:`[data-action="start-workout"]`},{title:`Progress`,text:`Your weights and charts show up here after you log sets.`,target:`[data-nav="progress"]`},{title:`Fuel`,text:`Log water, protein and calories with a tap.`,target:`[data-nav="fuel"]`},{title:`Profile`,text:`Change your goal, workout days and equipment, and back up your data here.`,target:`[data-nav="profile"]`}];function er(e){let t=J[e];if(!t)return``;let n=e===J.length-1;return`
    <aside class="tour" role="region" aria-label="App tour, step ${e+1} of ${J.length}">
      <p class="tour-count">${e+1} of ${J.length}</p>
      <h2>${t.title}</h2>
      <p>${t.text}</p>
      <div class="tour-buttons">
        ${n?``:`<button type="button" class="link-button" data-action="tour-skip">Skip tour</button>`}
        <button type="button" class="primary" data-action="${n?`tour-skip`:`tour-next`}">${n?`Done`:`Next`}</button>
      </div>
    </aside>`}function tr(e,t){let n=J[t]?.target;n&&e.querySelector(n)?.classList.add(`tour-highlight`)}function nr(e,t){let n=e[t];return n?.[n.length-1]}function Y(e,t,n=`lb`){let r=e.sets.map(e=>e.amount).join(`, `),i=e.sets[e.sets.length-1]?.weight,a=t===`seconds`?` sec`:` reps`;return i==null?`${r}${a}`:`${Ot(i,n)} × ${r}${a}`}function rr(e,t,n,r={}){if(!e||e.sets.length===0)return{weight:null,message:n===`bodyweight`?`First time: aim for ${t.min}–${t.max} ${t.unit}.`:`First time: start light. Find a weight where the last 2 reps feel hard but your form stays clean.`};let i=e.sets.every(e=>e.amount>=t.max),a=e.sets.reduce((e,t)=>e+t.amount,0)/e.sets.length<t.min-2,o=e.sets[e.sets.length-1].weight;if(n===`bodyweight`||o===null)return{weight:null,message:i?`You hit ${t.max} on every set. Try a couple more ${t.unit} each set.`:`Aim for ${t.max} ${t.unit} on every set.`};let s=r.weightUnit??`lb`,c=H(o,s),l=kt(s),u=e=>`${U(e)} ${s}`,d=n===`assist`?Math.max(0,c-l):c+l,f=n===`assist`?c+l:Math.max(0,c-l),p=Dt(d,s),m=Dt(f,s);return i?r.holdWeight?{weight:o,message:`Easy day: stay at ${u(c)} and keep the reps smooth.`}:{weight:p,message:n===`assist`?`You hit ${t.max} reps every set. Try ${u(d)} of help (a little less).`:`You hit ${t.max} reps every set. Try ${u(d)}.`}:a?{weight:m,message:`That was heavy. Try ${u(f)} and aim for ${t.min}–${t.max} reps.`}:{weight:o,message:`Stay at ${u(c)} and aim for ${t.max} reps on every set.`}}function ir(e,t,n,r){let i=e[t]??[],a=i[i.length-1],o=a&&a.date===n?[...i.slice(0,-1),{...a,sets:[...a.sets,r]}]:[...i,{date:n,sets:[r]}];return{...e,[t]:o}}function ar(e,t,n,r,i){let a=(e[t]??[]).map(e=>e.date===n&&r>=0&&r<e.sets.length?{...e,sets:e.sets.map((e,t)=>t===r?i:e)}:e);return{...e,[t]:a}}function or(e){let t=new Map;for(let[n,r]of Object.entries(e))for(let e of r){if(e.sets.length===0)continue;let r=t.get(e.date)??{date:e.date,entries:[]};r.entries.push({exerciseId:n,session:e}),t.set(e.date,r)}return[...t.values()].sort((e,t)=>t.date.localeCompare(e.date))}function sr(e,t){let r=n(t);return or(e).filter(e=>new Date(e.date)>=r).length}function cr(e,t){return e.filter(e=>e.sets.length>0).map(e=>{if(t===`bodyweight`)return Math.max(...e.sets.map(e=>e.amount));let n=e.sets.map(e=>e.weight??0);return t===`assist`?Math.min(...n):Math.max(...n)})}function lr(e,t){let r=n(t),i=0;for(let t of Object.values(e))for(let e of t)new Date(e.date)>=r&&(i+=e.sets.length);return i}function ur(e,t,n){let r=[];for(let[i,a]of Object.entries(e)){let e=n(i),o=a.filter(e=>e.sets.length>0);if(e===null||o.length<2||o[o.length-1].date<t)continue;let s=cr(o,e),c=s[s.length-1],l=s.slice(0,-1),u=e===`assist`?Math.min(...l):Math.max(...l);(e===`assist`?c<u:c>u)&&r.push({exerciseId:i,value:c,previous:u})}return r}var dr=3;function fr(e,t,n=dr){return(e[t]??[]).filter(e=>e.sets.length>0).slice(-n).reverse()}function pr(e){return new Date(e).toLocaleDateString(void 0,{month:`short`,day:`numeric`})}function mr(e,t,n,r){let i=fr(e,t);if(i.length<2)return``;let a=i.map(e=>`<li><span class="recent-date">${pr(e.date)}</span><span>${Y(e,n,r)}</span></li>`).join(``);return`
    <div class="recent-times">
      <h4>Your last ${i.length} times</h4>
      <ul>${a}</ul>
    </div>`}var hr={youtubeId:`zt8SEmJhFuY`,title:`How to pick the right weights`,channel:`Alloy Health`},gr={youtubeId:`oBs-PE34x7g`,title:`How to use basic gym equipment`,channel:`SELF`};function _r(e){return`
    <a class="demo-link" href="https://www.youtube.com/watch?v=${e.youtubeId}" target="_blank" rel="noopener noreferrer">
      Watch: ${e.title} ↗<small>by ${e.channel}</small>
    </a>`}function vr(e){return`
    <header class="screen-header">
      <p class="eyebrow">New to working out?</p>
      <h1>Start here</h1>
      <p class="lead">No experience needed. This takes two minutes, and you can come back to it any time.</p>
    </header>

    <section class="card guide-card">
      <h2>The words</h2>
      <dl class="guide-words">
        <dt>Rep</dt>
        <dd>One time doing a move, like pushing the handles forward once.</dd>
        <dt>Set</dt>
        <dd>A group of reps in a row. "3 sets of 10" means 10 reps, rest, 10 more, rest, 10 more.</dd>
        <dt>Rest</dt>
        <dd>The break between sets, usually 1 to 2 minutes. The app times it for you.</dd>
        <dt>Weight</dt>
        <dd>How heavy it is. On a machine, you set it with a pin in the weight stack.</dd>
      </dl>
    </section>

    <section class="card guide-card">
      <h2>How much weight?</h2>
      <p>Start lighter than you think. Pick a weight where the last 2 reps feel hard but your form stays clean.</p>
      <ul>
        <li>If you could have done 5 or more extra reps, go heavier next time.</li>
        <li>If your form falls apart or you can't finish, go lighter.</li>
        <li>The app remembers what you did and suggests the next weight, so you don't have to work it out.</li>
      </ul>
      ${_r(hr)}
    </section>

    <section class="card guide-card">
      <h2>Using a machine</h2>
      <ul>
        <li>Look at the picture on the machine. It shows the move and which muscles it works.</li>
        <li>Adjust the seat and pads first so the handles line up with your body, then pick a light weight.</li>
        <li>Move slowly and smoothly. Don't jerk the weight.</li>
        <li>Not sure how a machine works? Tap the exercise in the app for steps and a demo, or ask the staff at the front desk.</li>
      </ul>
      ${_r(gr)}
    </section>

    <section class="card guide-card">
      <h2>At the gym</h2>
      <ul>
        <li>Do the warm-up first, then the exercises in order, then the cool-down.</li>
        <li>If a machine is taken, tap <strong>Swap</strong> for another option, or do the next exercise and come back.</li>
        <li>Wipe the machine when you finish, and put weights back where you found them.</li>
        <li>Everyone started at the beginning. Most people at the gym are focused on their own workout.</li>
      </ul>
    </section>

    <section class="card guide-card">
      <h2>Sore or hurt?</h2>
      <p>A dull, tired ache in your muscles for a day or two is normal. Sharp pain, pain in a joint, or pain that keeps coming back is not.</p>
      <ul>
        <li>If something hurts, stop, and tap <strong>This hurt</strong> so the app swaps in a gentler move.</li>
        <li>If it keeps happening, check with a doctor or physical therapist. This app isn't medical advice.</li>
      </ul>
    </section>

    <section class="card guide-card">
      <h2>How this app helps</h2>
      <ul>
        <li>It plans each workout day using only the machines your gym has.</li>
        <li>Every exercise has steps, common mistakes and a demo video.</li>
        <li>Workout mode talks you through each set and runs the rest timer.</li>
        <li>It saves what you lift, so you can see your progress.</li>
      </ul>
    </section>

    <button type="button" class="primary big" data-action="close-guide">${e}</button>
  `}var yr=[{title:`Tell us about you`,detail:`Your goal, and any injuries or sore spots to protect.`},{title:`Pick your gym's equipment`,detail:`You only get exercises that use machines your gym has.`},{title:`Follow today's workout`,detail:`Step-by-step form, a rest timer, and a voice that talks you through each set.`}];function br(e){return`
    <header class="screen-header">
      <h1>Welcome to Gym Guide</h1>
      <p class="lead">It tells you what to do at the gym today and shows exactly how to do each exercise. It takes about a minute to set up.</p>
    </header>

    <section class="card">
      <ol class="intro-steps">${yr.map((e,t)=>`
      <li>
        <span class="step-number" aria-hidden="true">${t+1}</span>
        <div>
          <strong>${e.title}</strong>
          <p class="hint">${e.detail}</p>
        </div>
      </li>`).join(``)}</ol>
    </section>

    <button type="button" class="primary big" data-action="start-setup">Get started</button>
    <p class="hint small center-text">No account needed. Everything is saved on this phone.</p>
    <button type="button" class="link-button center" data-action="open-guide">New to working out? Start here</button>

    ${e}
  `}var xr=`CC BY 4.0`,Sr=`https://creativecommons.org/licenses/by/4.0/`,X=`https://freemusicarchive.org/music`,Cr={file:`punjabi-bhangra.mp3`,title:`Punjabi Bhangra Energy Short Burst`,artist:`Alex Morgan`,source:`${X}/alex-morgan/kids-comedy-holiday/punjabi-bhangra-energy-short-burst/`},wr={file:`boom-bap.mp3`,title:`Boom Bap Old School Hip-Hop Beat`,artist:`Alex Morgan`,source:`${X}/alex-morgan/trap-hip-hop-beats/boom-bap-old-school-hip-hop-beat/`},Tr={file:`electronic-dance.mp3`,title:`Energetic Upbeat Electronic Dance`,artist:`Music for Creators`,source:`${X}/fretbound/single/energetic-upbeat-electronic-dance/`},Er={file:`energetic-pop.mp3`,title:`Energetic Pop Background`,artist:`AurosonMusic`,source:`${X}/aurosonmusic/single/energetic-pop-background/`},Dr={file:`bright-pop.mp3`,title:`Bright Energetic Upbeat Pop`,artist:`Music for Creators`,source:`${X}/fretbound/single/bright-energetic-upbeat-pop/`},Or={file:`disco-funk.mp3`,title:`Mirrorglow (Upbeat & Energetic Disco Funk)`,artist:`Vlad Annenkov`,source:`${X}/vlad-annenkov/single/upbeat-energetic-disco-funk-mirrorglowmp3/`},kr={file:`pop-rock.mp3`,title:`Neon Pulse (Energetic Pop Rock)`,artist:`Vlad Annenkov`,source:`${X}/vlad-annenkov/single/energetic-pop-rock-neon-pulsemp3/`},Ar={file:`hype-trap.mp3`,title:`Hard Hype Trap for Sports Intros`,artist:`Alex Morgan`,source:`${X}/alex-morgan/trap-hip-hop-beats/hard-hype-trap-for-sports-intros/`},jr={file:`phonk-gym.mp3`,title:`Hard Phonk Gym Workout Track`,artist:`Alex Morgan`,source:`${X}/alex-morgan/phonk-drift/hard-phonk-gym-workout-track/`},Mr={file:`workout-edm.mp3`,title:`Workout Songs`,artist:`Alex Morgan`,source:`${X}/alex-morgan/epic-action-sports/workout-songs/`},Nr={file:`masala-madness.mp3`,title:`Masala Madness`,artist:`Geoff Harvey - Purple Planet Music`,source:`${X}/geoff-harvey-purple-planet-music/indian-life/masala-madness-1/`},Pr={file:`mumbai-mood.mp3`,title:`Mumbai Mood`,artist:`Geoff Harvey - Purple Planet Music`,source:`${X}/geoff-harvey-purple-planet-music/indian-life/mumbai-mood-1/`},Fr={file:`bollywood-flame.mp3`,title:`Bollywood Flame With Bright Festive Drive`,artist:`Alex Morgan`,source:`${X}/alex-morgan/advertising-broadcast-vol-2/bollywood-flame-with-bright-festive-drive/`},Ir={file:`weekend-chill.mp3`,title:`Chill Hip Hop - Weekend Chill Beat`,artist:`AurosonMusic`,source:`${X}/aurosonmusic/single/chill-hip-hop-weekend-chill-beat/`},Lr={push:{name:`Push day mix`,songs:[Ar,Cr,Nr,wr,Tr,Or,Mr]},pull:{name:`Pull day mix`,songs:[jr,Pr,Tr,Cr,kr,Nr,Er]},legs:{name:`Legs day mix`,songs:[Ar,Nr,wr,Cr,jr,Or,Mr]},home:{name:`At-home abs mix`,songs:[Dr,Pr,Er,Fr,Tr,Mr]},mobility:{name:`Mobility mix`,songs:[Ir]}};function Rr(){let e=new Map;for(let t of Object.values(Lr))for(let n of t.songs)e.set(n.file,n);return[...e.values()]}function zr(e){return new URL(`music/${e.file}`,document.baseURI).href}var Br=.3,Vr=8e3;function Hr(e,t,n=()=>new Audio){let r=null,i=null,a=0,o=0,s=null,c;function l(e,t){if(!r)return;let n=Lr[e].songs;a=t%n.length,r.src=zr(n[a]),r.play().catch(()=>u(`Couldn't play the music. Check your connection and try again.`))}function u(e){i!==null&&(f(),t(e))}function d(){i!==null&&l(i,a+1)}function f(){window.clearTimeout(c),r&&=(r.pause(),null),i=null,s=null,o=0,e()}function p(){window.clearTimeout(c),r&&s!==null&&(r.volume=s,s=null)}function m(t){if(r&&i===t){r.play().catch(()=>u(`Couldn't play the music. Check your connection and try again.`));return}r?.pause(),r=n(),r.addEventListener(`ended`,d),r.addEventListener(`playing`,()=>{o=0}),r.addEventListener(`error`,()=>{o+=1,o>=Lr[t].songs.length?u(`The music couldn't load. Check your connection and try again.`):d()}),i=t,o=0,s=null,l(t,0),e()}return{play:m,stop:f,current:()=>i,duck(){r&&s===null&&(s=r.volume,r.volume=s*Br,c=window.setTimeout(p,Vr))},restore:p}}var Ur=`gym-guide-music`;function Wr(e){return{async savedCount(){let t=await e.open(Ur),n=0;for(let e of Rr())await t.match(zr(e))&&(n+=1);return n},async save(t){navigator.storage?.persist?.().catch(()=>!1);let n=await e.open(Ur),r=0;for(let e of Rr()){let i=zr(e);if(!await n.match(i)){let t=await fetch(i,{cache:`reload`});if(!t.ok)throw Error(`${e.file} could not be downloaded (${t.status})`);await n.put(i,t)}r+=1,t(r)}},async remove(){await e.delete(Ur)}}}var Gr=70;function Kr(e,t){if(e.kind===`checking`)return``;let n;return n=e.kind===`saved`?`
      <p class="music-status">✓ All ${t} songs are saved on this phone.</p>
      <button type="button" class="link-button" data-action="remove-music-offline">Remove saved music</button>`:e.kind===`saving`?`
      <p class="fuel-total" role="status">Saving song ${Math.min(e.done+1,t)} of ${t}…</p>
      <div class="meter" role="progressbar" aria-valuemin="0" aria-valuemax="${t}" aria-valuenow="${e.done}">
        <div class="meter-fill" style="width: ${Math.round(e.done/t*100)}%"></div>
      </div>
      <p class="hint small">Keep this screen open until it finishes.</p>`:`
      ${e.saved>0?`<p class="hint">${e.saved} of ${t} songs are saved so far.</p>`:``}
      ${e.kind===`error`?`<p class="form-error" role="alert">${L(e.message)}</p>`:``}
      <button type="button" class="secondary" data-action="save-music-offline">${e.saved>0?`Finish saving the music`:`Save music for offline use`}</button>
      <p class="hint small">Uses about ${Gr} MB on this phone. Do it on Wi-Fi.</p>`,`
    <section class="card offline-music">
      <h2>Music offline</h2>
      <p class="hint">Songs play from the internet. Save them on this phone to listen at the gym without signal.</p>
      ${n}
    </section>`}function qr(e){let t=`caches`in window?Wr(window.caches):null,n=Rr().length,r={kind:`checking`};function i(){t?.savedCount().catch(()=>0).then(t=>{r=t===n?{kind:`saved`}:{kind:`idle`,saved:t},e.redrawProfile()})}async function a(){if(t&&r.kind!==`saving`){r={kind:`saving`,done:0},e.redrawProfile();try{await t.save(t=>{r={kind:`saving`,done:t},e.redrawProfile()}),r={kind:`saved`},e.redrawProfile(),e.showToast(`Music saved on this phone.`)}catch{r={kind:`error`,message:`Couldn't save all the music. Check your connection and free space on this phone, then try again.`,saved:await t.savedCount().catch(()=>0)},e.redrawProfile()}}}async function o(){await t?.remove(),r={kind:`idle`,saved:0},e.redrawProfile(),e.showToast(`Saved music removed. Songs will play from the internet.`)}return{card:()=>t?Kr(r,n):``,check:i,handleAction(e){if(e===`save-music-offline`)a();else if(e===`remove-music-offline`)o();else return!1;return!0}}}function Jr(e,t){let n=Lr[e],r=t===e,i=r?`<button type="button" class="secondary" data-action="stop-music" aria-label="Stop music">■ Stop</button>`:`<button type="button" class="secondary" data-action="play-music" data-workout="${e}" aria-label="Play ${n.name}">▶ Play</button>`;return`
    <section class="card music-card row-card">
      <p class="music-name">♪ ${r?`Playing now`:n.name}</p>
      ${i}
    </section>`}function Yr(){return`
    <details class="card music-credits">
      <summary>Music credits</summary>
      <ul>${Rr().map(e=>`<li><a href="${e.source}" target="_blank" rel="noopener noreferrer">${L(e.title)}</a> by ${L(e.artist)}</li>`).join(``)}</ul>
      <p class="hint small">From the Free Music Archive, used under the <a href="${Sr}" target="_blank" rel="noopener noreferrer">${xr}</a> license. The songs by Alex Morgan are listed there as AI-generated.</p>
    </details>`}var Xr={1:`Wrecked`,2:`Tired`,3:`Okay`,4:`Good`,5:`Great`},Zr=[1,2,3,4,5],Qr=2,$r=70,ei=6,ti=4,ni=85,ri=7;function ii(e){return e.feel<=Qr||e.readiness!==null&&e.readiness<$r||e.hours!==null&&e.hours<ei?`easy`:e.feel>=ti&&(e.readiness===null||e.readiness>=ni)&&(e.hours===null||e.hours>=ri)?`push`:`normal`}function ai(e){return e===`easy`?`Take it easy today. If you work out, workout mode drops a set from each exercise and keeps your weights where they were. Resting is fine too.`:e===`push`?`You're well recovered, so it's a good day to aim for the top of your rep range. Keep your form clean.`:`A normal day: train as planned.`}function oi(e,t){return t===`easy`?{...e,sets:Math.max(1,e.sets-1)}:e}function si(e){let t=[`Felt ${Xr[e.feel].toLowerCase()} (${e.feel}/5)`];return e.hours!==null&&t.push(`slept ${e.hours} h`),e.readiness!==null&&t.push(`readiness ${e.readiness}`),t.join(` · `)}function ci(e,t){return e.find(e=>e.date===t)}function li(e,t){return[...e.filter(e=>e.date!==t.date),t].sort((e,t)=>e.date.localeCompare(t.date)).slice(-180)}function ui(e,t,n){if(e===null||!Zr.includes(e))return{ok:!1,error:`Tap a number for how rested you feel.`};let r=null;if(t.trim()!==``&&(r=Number(t),!Number.isFinite(r)||r<0||r>24))return{ok:!1,error:`Hours slept should be a number between 0 and 24, or leave it blank.`};let i=null;return n.trim()!==``&&(i=Number(n),!Number.isInteger(i)||i<0||i>100)?{ok:!1,error:`Readiness should be a whole number from 0 to 100, or leave it blank.`}:{ok:!0,feel:e,hours:r,readiness:i}}var di=10;function fi(e){let t=o[e];return t?t.weightKind??`load`:null}function pi(e){return Object.keys(s).find(t=>s[t].slots.some(t=>t.options.includes(e)))??null}function mi(e){return e.timedSeconds?`seconds`:`reps`}function hi(e){return new Date(e).toLocaleDateString(void 0,{weekday:`short`,month:`short`,day:`numeric`})}function gi(e,t,n){return(e.weightKind??`load`)===`bodyweight`?t:H(t,n)}function _i(e,t,n){let r=e.weightKind??`load`;return r===`bodyweight`?`${t} ${e.timedSeconds?`sec`:`reps`}`:r===`assist`?`${U(t)} ${n} of help`:`${U(t)} ${n}`}function vi(e,t,r){let i=ur(e,n(t).toISOString(),fi).filter(({exerciseId:e})=>o[e]);return i.length===0?``:`
    <section class="card highlights-card">
      <h2>🏆 New personal bests this week</h2>
      <ul class="summary">${i.map(({exerciseId:e,value:t,previous:n})=>{let i=o[e];return`<li><strong>${i.name}</strong>: ${_i(i,gi(i,t,r),r)} <span class="hint">(was ${_i(i,gi(i,n,r),r)})</span></li>`}).join(``)}</ul>
    </section>`}function yi(e,t,n,r){let i={top:22,right:20,bottom:22,left:20},a=Math.min(...n),o=Math.max(...n),s=o-a||1,c=e=>i.left+e*(300-i.left-i.right)/(n.length-1),l=e=>i.top+(o-e)*(110-i.top-i.bottom)/s,u=n.map((e,t)=>`${t===0?`M`:`L`}${c(t).toFixed(1)},${l(e).toFixed(1)}`).join(` `),d=n.map((e,n)=>{let i=`${hi(t[n])}: ${r(e)}`;return`
        <g class="chart-point" data-point="${i}" tabindex="0" role="button" aria-label="${i}">
          <circle cx="${c(n)}" cy="${l(e)}" r="14" class="hit" />
          <circle cx="${c(n)}" cy="${l(e)}" r="4.5" class="dot" />
        </g>`}).join(``);return`
    <svg class="trend-chart" viewBox="0 0 300 110" role="img" aria-label="${e} over time">
      <line x1="${i.left}" x2="${300-i.right}" y1="${110-i.bottom+6}" y2="${110-i.bottom+6}" class="baseline" />
      <path d="${u}" class="trend-line" />
      ${d}
      <text x="${c(0)}" y="${l(n[0])-10}" class="value-label" text-anchor="start">${n[0]}</text>
      <text x="${c(n.length-1)}" y="${l(n[n.length-1])-10}" class="value-label" text-anchor="end">${n[n.length-1]}</text>
      <text x="${i.left}" y="106" class="axis-label">${hi(t[0])}</text>
      <text x="${300-i.right}" y="106" class="axis-label" text-anchor="end">${hi(t[t.length-1])}</text>
    </svg>
    <p class="chart-caption" aria-live="polite">Tap a dot to see that day.</p>
  `}function bi(e,t,r){let i=new Set(ur(e,n(t).toISOString(),fi).map(({exerciseId:e})=>e));return Object.entries(e).filter(([e,t])=>o[e]&&t.some(e=>e.sets.length>0)).map(([e,t])=>{let n=o[e],a=t.filter(e=>e.sets.length>0),s=cr(a,n.weightKind??`load`).map(e=>gi(n,e,r)),c=a[a.length-1],l=i.has(e),u=pi(e),d=(n.weightKind??`load`)===`assist`?Math.min(...s):Math.max(...s),f=s.length>=2?yi(n.name,a.map(e=>e.date),s,e=>_i(n,e,r)):`<p class="hint">Log it again to start a chart.</p>`;return`
        <section class="card progress-card ${u?`type-${u}`:``}">
          <h3 class="progress-name">${n.name}</h3>
          <p class="progress-stats">
            <span>Best: <strong>${_i(n,d,r)}</strong>${l?` <span class="new-best">New best!</span>`:``}</span>
            <span>Last: ${Y(c,mi(n),r)}</span>
          </p>
          ${f}
        </section>`}).join(``)}function xi(e,t){let n=or(e).slice(0,di);if(n.length===0)return``;let r=n.map(e=>{let n=e.entries.filter(({exerciseId:e})=>o[e]).map(({exerciseId:e,session:n})=>{let r=o[e];return`<li>${r.name}: <span class="hint">${Y(n,mi(r),t)}</span></li>`}).join(``);return`
        <h3 class="progress-name">${hi(e.date)}</h3>
        <ul class="summary">${n}</ul>`});return`
    <details class="card switcher recent-workouts">
      <summary>Recent workouts (${n.length})</summary>
      ${r.join(``)}
    </details>`}function Si(e){let[t,n,r]=e.split(`-`).map(Number);return new Date(t,n-1,r,12).toISOString()}function Ci(e){if(e.length===0)return``;let t=e.slice(-14),n=t[t.length-1],r=[{name:`How rested you felt`,points:t.map(e=>({date:e.date,value:e.feel})),format:e=>`${Xr[e]??e} (${e}/5)`},{name:`Hours slept`,points:t.flatMap(e=>e.hours===null?[]:[{date:e.date,value:e.hours}]),format:e=>`${e} h`},{name:`Readiness`,points:t.flatMap(e=>e.readiness===null?[]:[{date:e.date,value:e.readiness}]),format:e=>String(e)}].filter(e=>e.points.length>=2).map(e=>`
        <section class="card progress-card">
          <h3 class="progress-name">${e.name}</h3>
          ${yi(e.name,e.points.map(e=>Si(e.date)),e.points.map(e=>e.value),e.format)}
        </section>`).join(``);return`
    <h2 class="section-title">Recovery</h2>
    <section class="card">
      <p class="progress-stats"><span>Last check-in (${hi(Si(n.date))}): ${si(n)}</span></p>
      ${r?``:`<p class="hint">Check in on a few more mornings and your charts will appear here.</p>`}
    </section>
    ${r}`}var wi=[50,55,55,60,65];function Ti(e,t){return`
    <div class="example-preview">
      <p class="example-label">Example</p>
      <h3 class="progress-name">Machine Chest Press</h3>
      ${yi(`Example: chest press weight over five weeks`,wi.map((t,n)=>new Date(e.getFullYear(),e.getMonth(),e.getDate()-7*(wi.length-1-n)).toISOString()),wi.map(e=>H(e,t)),e=>`${U(e)} ${t}`)}
    </div>`}function Ei(e,t,n,r,i=`lb`){let a=`
    <header class="screen-header">
      <h1>Your progress</h1>
      <p class="lead">Everything here comes from the sets you log in workout mode.</p>
    </header>`;if(or(e).length===0)return`${a}
      <section class="card empty">
        <p>No workouts yet. Log your sets in workout mode and your progress shows up here, like this:</p>
        ${Ti(t,i)}
        <button type="button" class="secondary" data-nav="today">Go to today's workout</button>
      </section>
      ${Ci(r)}`;let o=sr(e,t),s=lr(e,t);return`${a}
    <section class="card week-card">
      <p class="week-count"><strong>${o}</strong> of ${n}</p>
      <p>workouts this week${o>=n?` — goal reached!`:``}</p>
      <div class="meter" role="progressbar" aria-valuemin="0" aria-valuemax="${n}" aria-valuenow="${o}">
        <div class="meter-fill" style="width: ${Math.min(100,Math.round(o/Math.max(1,n)*100))}%"></div>
      </div>
      <p class="week-sets">${s} ${s===1?`set`:`sets`} logged</p>
      <p class="hint small">Your goal is the workout days in your week plan. The week starts Monday.</p>
    </section>

    ${vi(e,t,i)}

    ${Ci(r)}

    <h2 class="section-title">Exercises</h2>
    ${bi(e,t,i)}

    ${xi(e,i)}
  `}var Di={open:!1,feel:null,hours:``,readiness:``,error:``};function Oi(e){return`
    <section class="card recovery-card">
      <h2>Morning check-in</h2>
      <p class="feel-question" id="feel-question">How rested do you feel?</p>
      <div class="feel-row" role="group" aria-labelledby="feel-question">${Zr.map(t=>`
      <button type="button" class="feel-option${e.feel===t?` active`:``}" data-action="checkin-feel" data-value="${t}" aria-pressed="${e.feel===t}">
        <strong>${t}</strong><small>${Xr[t]}</small>
      </button>`).join(``)}</div>
      <div class="calendar-fields">
        <label class="calendar-field">
          <span>Hours slept <small>(optional)</small></span>
          <input type="number" inputmode="decimal" step="0.5" min="0" max="24" placeholder="7.5" value="${e.hours}" data-field="checkin-hours" />
        </label>
        <label class="calendar-field">
          <span>Readiness <small>(optional)</small></span>
          <input type="number" inputmode="numeric" step="1" min="0" max="100" placeholder="0–100" value="${e.readiness}" data-field="checkin-readiness" />
        </label>
      </div>
      <p class="hint small">Readiness is the score from a ring or watch such as Oura, if you have one. Skip it if you don't.</p>
      ${e.error?`<p class="form-error" role="alert">${e.error}</p>`:``}
      <div class="button-row">
        <button type="button" class="secondary" data-action="checkin-cancel">Cancel</button>
        <button type="button" class="primary" data-action="checkin-save">Save check-in</button>
      </div>
    </section>`}function ki(e,t){if(t.open)return Oi(t);if(!e)return`
      <section class="card recovery-card row-card">
        <div>
          <h2>Morning check-in</h2>
          <p class="hint">Ten seconds. Tunes today's workout.</p>
        </div>
        <button type="button" class="secondary" data-action="checkin-open">Check in</button>
      </section>`;let n=ii(e);return`
    <section class="card recovery-card level-${n}">
      <h2>Today's recovery</h2>
      <p class="recovery-summary">${si(e)}</p>
      <p class="recovery-advice">${ai(n)}</p>
      <button type="button" class="link-button" data-action="checkin-open">Change check-in</button>
      <p class="hint small">A training suggestion, not medical advice.</p>
    </section>`}function Ai(t){let{root:n,state:r}=t,i={...Di};function a(){return ci(r.recovery,e(new Date))}function o(){let e=n.querySelector(`input[data-field="checkin-hours"]`),t=n.querySelector(`input[data-field="checkin-readiness"]`);e&&(i.hours=e.value),t&&(i.readiness=t.value)}function s(n,s){if(o(),n===`checkin-open`){let e=a();i={open:!0,feel:e?.feel??null,hours:e?.hours===null||e===void 0?``:String(e.hours),readiness:e?.readiness===null||e===void 0?``:String(e.readiness),error:``}}else if(n===`checkin-feel`)i={...i,feel:Number(s),error:``};else if(n===`checkin-cancel`)i={...Di};else if(n===`checkin-save`){let n=ui(i.feel,i.hours,i.readiness);if(!n.ok)i={...i,error:n.error};else{r.recovery=li(r.recovery,{date:e(new Date),feel:n.feel,hours:n.hours,readiness:n.readiness}),i={...Di},q(r),t.render(),t.showToast(`Check-in saved.`);return}}t.render()}return{today:a,card:()=>ki(a(),i),handleAction(e,t){return e.startsWith(`checkin-`)?(s(e,t),!0):!1}}}function ji(e,t,n=null){return{day:e.day,startedAt:t.toISOString(),exercises:e.exercises,prescription:oi(e.prescription,n),index:0,setNumber:1,phase:e.exercises.length>0?`lift`:`done`,restEndsAt:null,recoveryLevel:n}}function Z(e){return e.exercises[e.index]}function Mi(e){return e.setNumber>=e.prescription.sets}function Ni(e){return e.index>=e.exercises.length-1}function Pi(e){return{...e,phase:`log`}}function Fi(e,t){if(Mi(e)&&Ni(e))return{...e,phase:`done`,restEndsAt:null};let n=t+e.prescription.restSeconds*1e3;return Mi(e)?{...e,index:e.index+1,setNumber:1,phase:`rest`,restEndsAt:n}:{...e,setNumber:e.setNumber+1,phase:`rest`,restEndsAt:n}}function Ii(e){return{...e,phase:`lift`,restEndsAt:null}}function Li(e,t,n){let r=Math.max(e.restEndsAt??n,n);return{...e,restEndsAt:r+t*1e3}}function Ri(e){return Ni(e)?{...e,phase:`done`,restEndsAt:null}:{...e,index:e.index+1,setNumber:1,phase:`lift`,restEndsAt:null}}function zi(e,t){let n=e.exercises.map((n,r)=>r===e.index?t:n);return{...e,exercises:n,setNumber:1,phase:`lift`,restEndsAt:null}}function Bi(e,t){return e.restEndsAt===null?0:Math.max(0,Math.ceil((e.restEndsAt-t)/1e3))}function Q(e,t,n){let r=nr(e,n);return r&&r.date===t.startedAt?r.sets:[]}function Vi(e,t,n){let r=(e[n]??[]).filter(e=>e.date!==t.startedAt);return r[r.length-1]}function Hi(e,t,n,r=`lb`){let i=y(n.exercise,t.prescription);return rr(Vi(e,t,n.exercise.id),i,n.exercise.weightKind??`load`,{holdWeight:t.recoveryLevel===`easy`,weightUnit:r})}function Ui(e,t){let n=y(t.exercise,e.prescription);return`${n.min}–${n.max} ${n.unit}`}function $(e){return`Exercise ${e.index+1} of ${e.exercises.length} · ${ve(e.day)}`}function Wi(e,t=!1){return`
    <div class="session-controls">
      <button type="button" class="link-button" data-action="toggle-voice" aria-pressed="${e}">Voice: ${e?`on`:`off`}</button>
      ${t?`<button type="button" class="link-button" data-action="skip-exercise">Skip exercise</button>`:``}
      <button type="button" class="link-button" data-action="end-workout">End workout</button>
    </div>
  `}function Gi(e,t,n,r,i,a=`lb`,o=``){let s=Z(e);if(!s)return``;let c=Vi(t,e,s.exercise.id),l=y(s.exercise,e.prescription),u=Hi(t,e,s,a),d=Q(t,e,s.exercise.id);return`
    <header class="screen-header">
      <p class="eyebrow">${$(e)}</p>
      <h1>${s.exercise.name}</h1>
    </header>

    ${r?`<p class="notice" role="status">${r}</p>`:``}
    ${e.recoveryLevel===`easy`?`<p class="notice">Easy day: fewer sets, and your weights stay where they were.</p>`:``}

    <section class="card set-card">
      <p class="set-label">Set ${e.setNumber} of ${e.prescription.sets}</p>
      <p class="set-target">${Ui(e,s)}</p>
      ${c?`<p class="last-time">Last time: ${Y(c,l.unit,a)}</p>`:``}
      ${e.setNumber===1?`<p class="suggestion">${u.message}</p>`:``}
      ${d.length>0?`<p class="last-time">Today so far: ${Y({date:``,sets:d},l.unit,a)}</p>`:``}
    </section>

    ${we(s)}

    <button type="button" class="primary big" data-action="set-done">Set done</button>

    ${Ke(s.exercise.id,o,!0)}

    <details class="card how-to">
      <summary>How to do it</summary>
      ${Te(s)}
    </details>

    <div class="button-row">
      <button type="button" class="secondary" data-action="open-swap">Swap</button>
      <button type="button" class="secondary" data-action="hurt">This hurt</button>
    </div>
    ${Jr(e.day,i)}
    ${Wi(n,!0)}
  `}function Ki(e,t){let n=e.exercises.reduce((n,r)=>n+Q(t,e,r.exercise.id).length,0),r=n>0?`You've logged ${n} ${n===1?`set`:`sets`}. They're saved, and this workout will show as done on your calendar.`:`You haven't logged any sets yet, so nothing will be saved.`;return`
    <header class="screen-header">
      <p class="eyebrow">${$(e)}</p>
      <h1>End this workout?</h1>
      <p class="lead">${r}</p>
    </header>

    <button type="button" class="primary big" data-action="confirm-end">Yes, end workout</button>
    <button type="button" class="secondary" data-action="cancel-end">Keep going</button>
  `}function qi(e,t){let n=Z(e);if(!n)return``;let r=t.length===0?`<section class="card empty"><p>There's no other exercise for this spot with your gym's equipment. You can skip it instead.</p></section>`:t.map((e,t)=>`
        <button type="button" class="swap-option" data-action="choose-swap" data-index="${t}">
          <strong>${e.exercise.name}</strong>
          <small>${e.exercise.muscles}</small>
          ${e.cautionAreas.length>0?`<small class="swap-caution">Go easy: has a caution for you</small>`:``}
        </button>`).join(``);return`
    <header class="screen-header">
      <p class="eyebrow">${$(e)}</p>
      <h1>Swap ${n.exercise.name}</h1>
      <p class="lead">Pick another exercise that works the same muscles. ${n.exercise.name} stays in future workouts.</p>
    </header>

    <div class="swap-list">${r}</div>

    <button type="button" class="secondary" data-action="cancel-swap">Keep ${n.exercise.name}</button>
  `}function Ji(e,t,n,r=`lb`,i=!1){let a=Z(e);if(!a)return``;let o=a.exercise.weightKind??`load`,s=y(a.exercise,e.prescription),c=a.exercise.equipment.includes(`dumbbells`),l=o===`assist`?`Help from the machine (${r})`:c?`Weight (${r}, per dumbbell)`:`Weight (${r})`,u=(e,t,n,r)=>`
    <label class="stepper-label" for="log-${e}">${t}</label>
    <div class="stepper">
      <button type="button" class="step-button" data-step="${e}" data-delta="${-r}" aria-label="Less">−</button>
      <input id="log-${e}" type="number" inputmode="decimal" min="0" value="${n}" data-field="${e}" />
      <button type="button" class="step-button" data-step="${e}" data-delta="${r}" aria-label="More">+</button>
    </div>
  `;return`
    <header class="screen-header">
      <p class="eyebrow">${$(e)}</p>
      <h1>${i?`Fix set ${e.setNumber}`:`Set ${e.setNumber} done`}</h1>
      <p class="lead">${a.exercise.name}: ${i?`what should it say?`:`what did you do?`}</p>
    </header>

    <section class="card">
      ${o===`bodyweight`?``:u(`weight`,l,t.weight,kt(r))}
      ${u(`amount`,s.unit===`seconds`?`Seconds held`:`Reps`,t.amount,1)}
      ${n?`<p class="form-error" role="alert">${n}</p>`:``}
    </section>

    ${i?`<button type="button" class="primary big" data-action="save-fix">Save change</button>
    <button type="button" class="secondary" data-action="cancel-fix">Cancel</button>`:`<button type="button" class="primary big" data-action="save-set">Save set</button>
    <button type="button" class="secondary" data-action="cancel-log">Back to the set</button>`}
  `}function Yi(e,t){return e.exercises.flatMap(n=>Q(t,e,n.exercise.id).map((e,t)=>({planned:n,setIndex:t,set:e})))}function Xi(e,t,n=`lb`){let r=e.phase===`rest`,i=Yi(e,t).map(({planned:t,setIndex:r,set:i},a)=>{let o=y(t.exercise,e.prescription).unit===`seconds`?`sec`:`reps`,s=i.weight===null?``:`${Ot(i.weight,n)} × `;return`<button type="button" class="swap-option" data-action="choose-fix" data-index="${a}">
        <strong>${t.exercise.name}</strong>
        <small>Set ${r+1}: ${s}${i.amount} ${o}</small>
      </button>`});return`
    <header class="screen-header">
      <p class="eyebrow">${$(e)}</p>
      <h1>Fix a set</h1>
      <p class="lead">Tap the set you logged wrong.${r?` Your rest timer keeps going.`:``}</p>
    </header>

    <div class="swap-list">${i.join(``)}</div>

    <button type="button" class="secondary" data-action="cancel-fix">${r?`Back to rest`:`Back`}</button>
  `}function Zi(e,t,n,r,i=!1){let a=Z(e);if(!a)return``;let o=e.setNumber===1?`Next exercise: <strong>${a.exercise.name}</strong>`:`Next: set ${e.setNumber} of ${e.prescription.sets}, ${a.exercise.name}`;return`
    <header class="screen-header">
      <p class="eyebrow">${$(e)}</p>
      <h1>Rest</h1>
    </header>

    <section class="card rest-card">
      <p class="timer" data-timer aria-live="off">${Ee(Bi(e,t))}</p>
      <p>${o}</p>
    </section>

    <div class="button-row">
      <button type="button" class="secondary" data-action="add-rest">+30 seconds</button>
      <button type="button" class="primary" data-action="skip-rest">Skip rest</button>
    </div>

    <details class="rest-more"${i?` open`:``}>
      <summary>More</summary>
      <div class="rest-more-body">
        <button type="button" class="secondary" data-action="fix-set">Fix a set</button>
        ${Jr(e.day,r)}
        ${Wi(n)}
      </div>
    </details>
  `}function Qi(e,t,n){let r=ur(t,e.startedAt,e=>o[e]?o[e].weightKind??`load`:null);if(r.length===0)return``;let i=r.map(({exerciseId:e,value:t,previous:r})=>{let i=o[e],a=i.weightKind??`load`,s=a===`bodyweight`?i.timedSeconds?`sec`:`reps`:n,c=e=>U(a===`bodyweight`?e:H(e,n));return`<li><strong>${i.name}</strong>: ${c(t)} ${s} <span class="hint">(was ${c(r)} ${s})</span></li>`}).join(``);return`
    <section class="card highlights-card">
      <h2>🏆 New personal best${r.length===1?``:`s`}</h2>
      <ul class="summary">${i}</ul>
    </section>`}function $i(e,t,n,r=`lb`){let i=e.exercises.map(n=>{let i=Q(t,e,n.exercise.id),a=y(n.exercise,e.prescription).unit,o=i.length>0?Y({date:``,sets:i},a,r):`skipped`;return`<li><strong>${n.exercise.name}</strong><br /><span class="hint">${o}</span></li>`}).join(``);return`
    <header class="screen-header">
      <p class="eyebrow">Workout done</p>
      <h1>Nice work!</h1>
      <p class="lead">Your sets are saved, so next time you'll see what you did today.</p>
    </header>

    ${Qi(e,t,r)}

    <section class="card">
      <h2>Today</h2>
      <ul class="summary">${i}</ul>
    </section>

    <section class="card">
      <h2>Cool down</h2>
      <p class="hint">Hold each stretch 20–30 seconds, gently, without bouncing.</p>
      ${Ce(n,`warm-up`)}
    </section>

    <button type="button" class="secondary" data-action="fix-set">Fix a set</button>
    <button type="button" class="primary" data-action="close-session">Back to workouts</button>
  `}function ea(e,t){let n=y(t.exercise,e.prescription);return`${n.min} to ${n.max} ${n.unit}`}function ta(e,t,n=`lb`){let r=Z(e);if(!r)return``;let i=[e.setNumber===1?`${r.exercise.name}.`:``,`Set ${e.setNumber} of ${e.prescription.sets}.`,`${ea(e,r)}.`],a=Hi(t,e,r,n);return e.setNumber===1&&a.weight!==null&&i.push(`Try ${U(H(a.weight,n))} ${At(n)}.`),i.filter(Boolean).join(` `)}function na(e){return`Rest ${e.prescription.restSeconds} seconds.`}function ra(e){let t=Z(e);return t?e.setNumber===1?`10 seconds. Next up, ${t.exercise.name}.`:`10 seconds. Get ready for set ${e.setNumber}.`:``}var ia=10,aa=30,oa=`If the pain was sharp or keeps coming back, stop and get it checked.`;function sa(e,t){let{root:n,state:r,music:i}=e,a=!0,o={weight:``,amount:``},s=``,c,l=!1,u=``,d=null,f=!1,p=null;function m(e){a&&e&&pn(e,{onStart:i.duck,onEnd:i.restore})}function h(){let n=r.session;if(!n)return``;if(f)return Ki(n,r.history);if(p){let e=p.editing,t=e?n.exercises.findIndex(t=>t.exercise.id===e.exerciseId):-1;return e&&t>=0?Ji({...n,index:t,setNumber:e.setIndex+1},o,s,r.weightUnit,!0):Xi(n,r.history,r.weightUnit)}switch(n.phase){case`lift`:return d?qi(n,d):Gi(n,r.history,a,u,i.current(),r.weightUnit,r.machineNotes[Z(n)?.exercise.id??``]??``);case`log`:return Ji(n,o,s,r.weightUnit);case`rest`:return Zi(n,Date.now(),a,i.current(),e.root.querySelector(`details.rest-more`)?.open??!1);case`done`:return $i(n,r.history,t.workoutFor(n.day).coolDown,r.weightUnit)}}function g(){let e=r.session,t=e&&Z(e);if(!e||!t)return;let n=Q(r.history,e,t.exercise.id),i=n[n.length-1],a=Hi(r.history,e,t,r.weightUnit),c=y(t.exercise,e.prescription),l=i?.weight??a.weight;o={weight:l==null?``:String(H(l,r.weightUnit)),amount:String(i?.amount??c.max)},s=``}function _(e){return n.querySelector(`input[data-field="${e}"]`)?.value.trim()??``}function v(t){let n=(t.exercise.weightKind??`load`)===`bodyweight`;o={weight:_(`weight`),amount:_(`amount`)};let i=Number(o.amount);if(!Number.isInteger(i)||i<1||i>300)return s=`Enter how many reps (or seconds) you did, as a whole number.`,e.render(),null;let a=null;if(!n){if(a=Number(o.weight),o.weight===``||!Number.isFinite(a)||a<0||a>1e3)return s=`Enter the weight in ${At(r.weightUnit)}. Use 0 if there was no added weight.`,e.render(),null;a=Dt(a,r.weightUnit)}return{weight:a,amount:i}}function ee(t,n){let i=r.session,a=i&&Q(r.history,i,t)[n];i&&a&&p&&(p={editing:{exerciseId:t,setIndex:n}},o={weight:a.weight===null?``:String(H(a.weight,r.weightUnit)),amount:String(a.amount)},s=``,e.render(),window.scrollTo(0,0))}function b(){p=null;let t=r.session;if(t?.phase===`rest`&&Bi(t,Date.now())===0){r.session=Ii(t),q(r),S();return}e.render(),window.scrollTo(0,0)}function te(){let e=r.session,t=p?.editing,n=e?.exercises.find(e=>e.exercise.id===t?.exerciseId);if(!e||!t||!n)return;let i=v(n);i&&(r.history=ar(r.history,t.exerciseId,e.startedAt,t.setIndex,i),q(r),b())}function x(){let e=r.session,t=e&&Z(e);if(!e||!t)return;let n=v(t);n&&(r.history=ir(r.history,t.exercise.id,e.startedAt,n),r.session=Fi(e,Date.now()),q(r),S())}function S(n=!0){window.clearInterval(c);let i=r.session;i&&(i.phase===`rest`?(l=Bi(i,Date.now())<=ia,m(na(i)),c=window.setInterval(C,250)):i.phase===`lift`?n&&m(ta(i,r.history,r.weightUnit)):i.phase===`done`&&(yn(!1),t.completeWorkout(i.day),q(r),m(`Workout complete. Nice work!`),hn([200,100,200])),e.render(),window.scrollTo(0,0))}function C(){let e=r.session;if(!e||e.phase!==`rest`){window.clearInterval(c);return}let t=Bi(e,Date.now()),i=n.querySelector(`[data-timer]`);i&&(i.textContent=Ee(t)),!l&&t<=ia&&t>0&&(l=!0,m(ra(e))),t===0&&!p&&(hn([300]),r.session=Ii(e),q(r),m(`Go.`),window.setTimeout(()=>S(),a?900:0),window.clearInterval(c))}function w(){window.clearInterval(c),p=null,d=null,f=!1,yn(!1),r.session=null,e.resetCalendarSelection(),q(r),e.go(`today`)}function T(){let e=r.session,n=e&&Z(e);if(!e||!n||!r.profile)return;t.setAvoided(n.exercise.id,!0);let i=e.exercises.map(e=>e.exercise.id),[a]=N(n,r.profile,r.equipmentIds,i);a?(r.session=zi(e,a),u=`Switched from ${n.exercise.name} to ${a.exercise.name}, which works the same muscles. ${oa}`,m(`Switched to ${a.exercise.name}.`)):(r.session=Ri(e),u=`Skipped ${n.exercise.name}. There's no gentler option for it with your equipment. ${oa}`),q(r),S(!a)}function E(o,s){let c=r.session;if(c){if(o!==`hurt`&&o!==`toggle-voice`&&(u=``),o===`open-swap`){let t=Z(c);if(!t||!r.profile)return;let n=c.exercises.map(e=>e.exercise.id);d=N(t,r.profile,r.equipmentIds,n),e.render(),window.scrollTo(0,0)}else if(o===`choose-swap`){let e=d?.[Number(s)];if(d=null,!e)return;r.session=zi(c,e),q(r),S()}else if(o===`cancel-swap`)d=null,e.render();else if(o===`hurt`)T();else if(o===`set-done`)r.session=Pi(c),g(),e.render(),n.querySelector(`input[data-field="amount"]`)?.select();else if(o===`cancel-log`)r.session={...c,phase:`lift`},q(r),e.render(),window.scrollTo(0,0);else if(o===`save-set`)x();else if(o===`fix-set`)p={editing:null},e.render(),window.scrollTo(0,0);else if(o===`choose-fix`){let e=Yi(c,r.history)[Number(s)];e&&ee(e.planned.exercise.id,e.setIndex)}else o===`save-fix`?te():o===`cancel-fix`?b():o===`add-rest`?(r.session=Li(c,aa,Date.now()),l=!1,q(r),C()):o===`skip-rest`?(r.session=Ii(c),q(r),S()):o===`skip-exercise`?(r.session=Ri(c),q(r),S()):o===`play-music`?i.play(c.day):o===`stop-music`?i.stop():o===`toggle-voice`?(a=!a,a||window.speechSynthesis?.cancel(),e.render()):o===`end-workout`?(f=!0,e.render(),window.scrollTo(0,0)):o===`cancel-end`?(f=!1,e.render()):o===`confirm-end`?(c.exercises.some(e=>Q(r.history,c,e.exercise.id).length>0)&&t.completeWorkout(c.day),w()):o===`close-session`&&w()}}return{screen:h,handleAction:E,begin(e,t){r.session=ji(e,new Date,t),q(r),yn(!0),S()},resume(){r.session&&(r.session.phase===`rest`&&Bi(r.session,Date.now())===0&&(r.session=Ii(r.session)),r.session.phase===`log`&&g(),yn(r.session.phase!==`done`),r.session.phase===`rest`&&(c=window.setInterval(C,250)))}}}var ca=`<p class="notice save-warning" role="alert">This phone isn't letting the app save right now, so what you log could be lost when you close this page. Free up some storage, or open the app outside a private tab.</p>`;function la(t){let n=en(),r=n.profile?n.equipmentConfirmed?`today`:`equipment`:`intro`,i=e(new Date),a=null,s=0,c=null,l=n.profile?{...n.profile}:{...V},u,p=!1,m=!1,h=!1,g=`today`,_=null;an(()=>queueMicrotask(A));let v=Hr(A,E),b={root:t,state:n,music:v,render:A,showToast:E,go:D,redrawProfile:re,resetCalendarSelection:ae},te=bn(b),x=qr(b),S=Zn(b),C=Ai(b),w=sa(b,{workoutFor:F,completeWorkout:xe,setAvoided:pe});function T(e){E(q(n)?e:`Couldn't save on this device — changes last until you close the page.`)}function E(e){let n=t.querySelector(`.toast`);n&&(n.textContent=e,n.classList.add(`visible`),window.clearTimeout(u),u=window.setTimeout(()=>n.classList.remove(`visible`),2500))}function D(e){r=e,_=null,e===`profile`&&(l=n.profile?{...n.profile}:{...V}),A(),Hn(t),window.scrollTo(0,0)}function ne(){return g===`profile`?`Back to your profile`:g===`today`?`Back to your workout`:`Back`}function O(){return`
      <section class="card row-card">
        <div>
          <h2>New to working out?</h2>
        </div>
        <button type="button" class="secondary" data-action="open-guide">Start here</button>
      </section>`}function re(){r===`profile`&&!n.session&&A()}function k(){return n.workoutLog.length===0&&Object.keys(n.history).length===0}function ie(e){let r=t.querySelector(`input[data-field="machine-note"][data-exercise="${e}"]`);if(!r||!o[e])return;let i=Ge(r.value),a={...n.machineNotes};i?a[e]=i:delete a[e],n.machineNotes=a,q(n),r.value=i,E(i?`Saved. It will show here next time.`:`Note cleared.`)}function ae(){i=e(new Date),s=0,c=null}function oe(e){let t=Math.min(12,Math.max(-4,e));if(t===s)return;s=t,c=null;let r=f(new Date,(n.profile??V).weekPlan,n.workoutLog,s);i=(r.find(e=>e.isToday)??r[0]).key,A()}function se(e){let t=e?n.session?.day:r===`today`?ve().shown:null;return t?` type-${t}`:``}function A(){let e=t.querySelector(`details.profile-more`);e&&(p=e.open);let r=t.querySelector(`details.setup-options`);r&&(h=r.open);let i=t.querySelector(`details.focus-picker`);i&&(m=i.open);let o=n.profile!==null&&n.equipmentConfirmed,s=n.session!==null;document.body.classList.toggle(`has-nav`,o&&!s);let c=Bn(document.activeElement,t);t.innerHTML=`
      <main class="screen${se(s)}">${rn()?ca:``}${s?w.screen():ce()}</main>
      ${o&&!s?Oe():``}
      ${a!==null&&o&&!s?er(a):``}
      <div class="toast" role="status" aria-live="polite"></div>
    `,a!==null&&o&&!s&&tr(t,a),c&&Vn(t,c)}function ce(){if(r===`intro`)return br(te.card(!0));if(r===`guide`)return vr(ne());if(r===`profile`)return ue();if(r===`equipment`)return P();if(r===`progress`){let e=(n.profile??V).weekPlan.filter(Boolean).length;return Ei(n.history,new Date,e,n.recovery,n.weightUnit)}return r===`fuel`?S.screen():De()}function j(e,t,n,r,i=``){return`<button type="button" class="chip${r?` active`:``}" data-group="${e}" data-value="${t}" aria-pressed="${r}">
      <span>${n}</span>${i?`<small>${i}</small>`:``}
    </button>`}function M(){return`
      <details class="card switcher profile-more"${p?` open`:``}>
        <summary>More: calendar, music and backup</summary>
        <div class="more-body">
          ${Sn(n.calendar,de(n.profile??V),_)}
          ${x.card()}
          ${te.card(!1)}
          ${Yr()}
        </div>
      </details>`}function le(){return`
      <section class="card">
        ${I(`⚖️`,`gold`,`Weight units`)}
        <div class="chip-row two">
          ${Tt.map(e=>`<button type="button" class="chip${n.weightUnit===e?` active`:``}" data-action="set-weight-unit" data-value="${e}" aria-pressed="${n.weightUnit===e}">${e===`lb`?`Pounds (lb)`:`Kilograms (kg)`}</button>`).join(``)}
        </div>
        <p class="hint small">Only changes how weights are shown and typed. Your logged weights are kept.</p>
      </section>

      <section class="card">
        ${I(`📅`,`purple`,`Your week`)}
        <p class="hint">Pick a workout for each day, or Rest. Legs days include abs.</p>
        ${Pn(l.weekPlan,l.focusPlan,m)}
      </section>`}function N(e){return`
      <details class="card switcher setup-options"${h?` open`:``}>
        <summary>Optional: weight units and workout days</summary>
        <div class="more-body">${e}</div>
      </details>`}function ue(){let e=n.profile===null,t=le();return`
      <header class="screen-header">
        ${e?`<p class="eyebrow">Step 1 of 2</p>`:``}
        <h1>${e?`Let's set up your workouts`:`Your profile`}</h1>
        <p class="lead">This shapes which exercises you get and how many sets and reps. It stays on this phone.</p>
      </header>

      ${e?``:O()}

      <section class="card">
        ${I(`🎯`,`teal`,`Your goal`)}
        <div class="chip-col">
          ${vt.map(e=>j(`goal`,e.id,e.label,l.goal===e.id,e.detail)).join(``)}
        </div>
      </section>

      <section class="card">
        ${I(`🏋️`,`blue`,`Lifting experience`)}
        <div class="chip-row three">
          ${yt.map(e=>j(`experience`,e.id,e.label,l.experience===e.id)).join(``)}
        </div>
      </section>

      ${e?``:t}

      <section class="card">
        ${I(`🛡️`,`green`,`Areas to protect`)}
        <p class="hint">Tick anything that's injured, painful, or tight. Risky exercises for these areas are left out, and gentler ones are picked instead.</p>
        <div class="chip-row">
          ${bt.map(e=>j(`area`,e.id,e.label,l.protectedAreas.includes(e.id))).join(``)}
        </div>
        <p class="disclaimer">This app isn't medical advice. If something hurts beyond normal muscle tiredness, stop, and check with a doctor or physical therapist about what's safe for you.</p>
      </section>

      ${e?N(t):``}

      ${fe()}

      ${e?``:M()}

      <button type="button" class="primary" data-action="save-profile">${e?`Next: your gym's equipment`:`Save profile`}</button>
      ${e?``:`<button type="button" class="secondary" data-nav="equipment">Edit gym equipment</button>`}
      ${e?``:`<button type="button" class="link-button center" data-action="start-tour">Take a quick tour of the app</button>`}
    `}function de(e){return JSON.stringify(l.weekPlan)!==JSON.stringify(e.weekPlan)||JSON.stringify(l.focusPlan)!==JSON.stringify(e.focusPlan)}function fe(){let e=n.profile?.avoidedExerciseIds??[];if(e.length===0)return``;let t=e.filter(e=>o[e]).map(e=>`
        <li class="avoided-item">
          <span>${o[e].name}</span>
          <button type="button" class="link-button" data-action="unavoid" data-exercise="${e}">Bring back</button>
        </li>`).join(``);return`
      <section class="card">
        ${I(`⚠️`,`pink`,`Exercises that hurt`)}
        <p class="hint">You marked these as hurting, so they're left out of your workouts.</p>
        <ul class="avoided-list">${t}</ul>
      </section>
    `}function pe(e,t){if(!n.profile)return;let r=n.profile.avoidedExerciseIds.filter(t=>t!==e);n.profile={...n.profile,avoidedExerciseIds:t?[...r,e]:r},l={...l,avoidedExerciseIds:n.profile.avoidedExerciseIds}}function me(e,t){let n=He.filter(t=>e.ids.includes(t.id));return`
      <section class="card equipment-list">
        <h2>${e.title}</h2>
        ${n.map(e=>`
          <label class="equipment-item">
            <input type="checkbox" data-equipment="${e.id}" ${t.has(e.id)?`checked`:``} />
            <span><strong>${e.name}</strong><small>${e.hint}</small></span>
          </label>`).join(``)}
      </section>`}function P(){let e=!n.equipmentConfirmed,t=new Set(n.equipmentIds);return`
      <header class="screen-header">
        ${e?`<p class="eyebrow">Step 2 of 2</p>`:``}
        <h1>What does your gym have?</h1>
        <p class="lead">Untick anything your gym doesn't have. You'll only get exercises you can actually do there.</p>
      </header>

      ${We.map(e=>me(e,t)).join(``)}

      <button type="button" class="primary" data-action="save-equipment">${e?`See today's workout`:`Save equipment`}</button>
    `}function ge(e,t,r){let{exercise:i}=e,a=nr(n.history,i.id);return`
      <article class="exercise">
        <details>
          <summary>
            <span class="exercise-number">${t+1}</span>
            <span class="exercise-title">
              <strong>${i.name}</strong>
              <small>${i.muscles}</small>
              ${a?`<small class="last-time">Last time: ${Y(a,r,n.weightUnit)}</small>`:``}
            </span>
            <span class="chevron" aria-hidden="true"></span>
          </summary>
          ${mr(n.history,i.id,r,n.weightUnit)}
          ${we(e)}
          ${Te(e)}
          ${Ke(i.id,n.machineNotes[i.id]??``)}
          <button type="button" class="link-button hurt-link" data-action="avoid" data-exercise="${i.id}">This hurts me, replace it</button>
        </details>
      </article>
    `}function F(e,t=null){return he(e,n.profile??V,n.equipmentIds,t)}function _e(e,t){let r=n.profile??V;return t!==null&&r.weekPlan[e]===t?r.focusPlan[e]??null:null}function ve(){let e=f(new Date,(n.profile??V).weekPlan,n.workoutLog,s),t=e.find(e=>e.key===i)??e.find(e=>e.isToday)??e[0];return{week:e,selected:t,shown:(t.isToday&&t.status!==`done`?c:null)??t.workout}}function xe(e){n.workoutLog=[...n.workoutLog,{date:new Date().toISOString(),day:e}],c=null}function Se(e){return`
      <details class="card switcher">
        <summary>Switch today's workout</summary>
        <p class="hint">Want a different one today? Pick it here. Your week plan stays as it is.</p>
        ${be(e,`Workout for today`)}
      </details>`}function L(e){if(!e)return``;let t=new Date;return Xe(n.deload,t)?In():Qe(n.workoutLog,t,n.deload)?Ln(Ze(n.workoutLog,t,n.deload.easyWeeks)):``}function Ee(e){return e?C.card():``}function De(){let{week:e,selected:t,shown:r}=ve(),i=kn(e,t.key,s);if(r===null)return`
        <header class="screen-header">
          <p class="eyebrow">${Tn(t)}</p>
          <h1>Rest day</h1>
        </header>
        ${i}
        ${Ee(t.isToday)}
        ${L(t.isToday)}
        ${k()?O():``}
        ${jn(t)}
      `;let a=F(r,_e(t.weekdayIndex,r)),o=t.status===`done`,c=t.status===`missed`,l=t.isToday&&!o,u=e.some(e=>e.isToday&&e.status!==`done`),f=a.exercises.length>0,p=f?a.exercises.map((e,t)=>ge(e,t,y(e.exercise,a.prescription).unit)).join(``):`<section class="card empty">
           <p>None of your gym's equipment fits this day yet.</p>
           <button type="button" class="secondary" data-action="go-equipment">Check your equipment</button>
         </section>`,m=f?o?`<p class="notice done-note">✓ Done. Your sets from this workout are in the Progress tab.</p>`:l?`<button type="button" class="primary big" data-action="start-workout">Start workout</button>
             <p class="hint start-hint">Talks you through each set with a rest timer. Headphones recommended.</p>`:c?`<p class="notice">○ This one wasn't logged. It was planned for ${d[t.weekdayIndex]}.</p>
               ${u?`<button type="button" class="secondary" data-action="do-today" data-workout="${r}">Do it today instead</button>`:``}`:`<p class="hint start-hint">Coming up. You can start it on the day.</p>`:``;return`
      <header class="screen-header">
        <p class="eyebrow">${t.isToday?`Today's workout`:Tn(t)}</p>
        <h1>${ye(r,a.title)}</h1>
        ${n.profile?`<p class="hint plan-summary">${Ct(n.profile)}</p>`:``}
      </header>

      ${i}

      ${m}

      ${Ee(t.isToday)}
      ${L(t.isToday)}
      ${k()?O():``}

      <details class="card switcher">
        <summary>Warm up first</summary>
        ${Ce(a.warmUp,`warm-up`)}
      </details>

      <p class="tap-hint">Tap an exercise to see how to do it. ${ee(a.prescription)}</p>
      <div class="exercise-list">${p}</div>

      <details class="card switcher">
        <summary>Cool down</summary>
        <p class="hint">Hold each stretch 20–30 seconds, gently, without bouncing.</p>
        ${Ce(a.coolDown,`warm-up`)}
      </details>

      ${Jr(r,v.current())}
      ${l?Se(r):``}

      ${f&&l?`<button type="button" class="link-button center" data-action="finish-workout">Mark done without workout mode</button>`:``}
    `}function Oe(){let e=r===`guide`?g:r,t=t=>e===t||t===`profile`&&e===`equipment`,n=(e,n)=>`<button type="button" class="nav-item${t(e)?` active`:``}"${t(e)?` aria-current="page"`:``} data-nav="${e}">${$n[e]??``}<span>${n}</span></button>`;return`<nav class="bottom-nav" aria-label="Main">${n(`today`,`Workout`)}${n(`progress`,`Progress`)}${n(`fuel`,`Fuel`)}${n(`profile`,`Profile`)}</nav>`}t.addEventListener(`change`,e=>{let t=e.target;if(t.dataset.field===`restore-file`){let e=t.files?.[0];e&&te.handleFileChosen(e);return}t.dataset.field===`cal-time`&&je(t.value)?(n.calendar={...n.calendar,time:t.value},q(n)):t.dataset.field===`cal-minutes`&&ke.includes(Number(t.value))&&(n.calendar={...n.calendar,minutes:Number(t.value)},q(n))});let Ae=null;t.addEventListener(`touchstart`,e=>{let t=e.touches[0];Ae=e.target.closest(`.calendar, .week-nav`)&&t?{x:t.clientX,y:t.clientY}:null}),t.addEventListener(`touchend`,e=>{let t=e.changedTouches[0],r=Ae;if(Ae=null,!r||!t||n.session)return;let i=t.clientX-r.x,a=t.clientY-r.y;Math.abs(i)>=50&&Math.abs(i)>1.5*Math.abs(a)&&oe(s+(i<0?1:-1))}),t.addEventListener(`click`,u=>{let d=u.target.closest(`[data-point]`);if(d){let e=d.closest(`.progress-card`)?.querySelector(`.chart-caption`);e&&(e.textContent=d.dataset.point??``);return}let f=u.target.closest(`button`);if(!f)return;let{group:p,value:m,action:h,day:ee,date:y,nav:ne,step:O,delta:re,exercise:k,index:se,planDay:ce,planWorkout:j,workout:M,focusDay:le,focus:N}=f.dataset;if(O&&re){let e=t.querySelector(`input[data-field="${O}"]`);e&&(e.value=String(Math.max(0,(Number(e.value)||0)+Number(re))));return}if(ce!==void 0&&j){let e=Number(ce),t=j===`rest`?null:j,n=l.weekPlan.map((n,r)=>r===e?t:n);if(!n.some(Boolean)){E(`Keep at least one workout day.`);return}l.weekPlan=n,l.focusPlan=l.focusPlan.map((t,n)=>n===e?null:t),A();return}if(le!==void 0&&N){let e=Number(le),t=N===`balanced`?null:N;l.focusPlan=l.focusPlan.map((n,r)=>r===e?t:n),A();return}if(p&&m){if(p===`goal`&&(l.goal=m),p===`experience`&&(l.experience=m),p===`area`){let e=m,t=l.protectedAreas;l.protectedAreas=t.includes(e)?t.filter(t=>t!==e):[...t,e]}A();return}if(y){i=y,c=null,A();return}if(ee){c=ee,A();return}if(ne){D(ne);return}if(h){if(h===`tour-next`||h===`tour-skip`){a=h===`tour-next`&&a!==null&&a+1<J.length?a+1:null,A();return}if(!n.session&&(h===`week-prev`||h===`week-next`||h===`week-today`)){oe(h===`week-today`?0:s+(h===`week-next`?1:-1));return}if(h===`save-note`&&k){ie(k);return}if(n.session){w.handleAction(h,se);return}if(r===`fuel`){S.handleAction(h,re,se);return}if(!(C.handleAction(h,m)||te.handleAction(h)||x.handleAction(h))){if(h===`save-profile`){let e=n.profile===null;n.profile={...l},e?(q(n),D(`equipment`)):(D(`today`),T(`Profile saved — your workouts are updated.`))}else if(h===`save-equipment`){n.equipmentIds=[...t.querySelectorAll(`input[data-equipment]`)].filter(e=>e.checked).map(e=>e.dataset.equipment??``);let e=!n.equipmentConfirmed;n.equipmentConfirmed=!0,e&&(a=0),D(`today`),T(`Equipment saved.`)}else if(h===`avoid`&&k)pe(k,!0),A(),T(`${o[k]?.name??`That exercise`} won't be planned again. Bring it back any time in Profile.`);else if(h===`unavoid`&&k)pe(k,!1),A(),T(`${o[k]?.name??`That exercise`} is back in your workouts.`);else if(h===`start-tour`)a=0,ae(),D(`today`);else if(h===`go-equipment`)D(`equipment`);else if(h===`add-to-calendar`){let e=xn(b);e&&(_=e,A(),E(`Calendar file downloaded. Open it to add your workouts.`))}else if(h===`easy-week-start`)n.deload=$e(n.deload,new Date),q(n),A(),E(`Easy week is on. Every workout this week has one fewer set.`);else if(h===`easy-week-dismiss`)n.deload=tt(n.deload,new Date),q(n),A();else if(h===`easy-week-end`)n.deload=et(n.deload,new Date),q(n),A(),E(`Back to your normal sets.`);else if(h===`set-weight-unit`){let e=Tt.find(e=>e===m);if(!e)return;n.weightUnit=e,q(n),A(),E(`Weights are now in ${At(e)}.`)}else if(h===`open-guide`)r!==`guide`&&(g=r),D(`guide`);else if(h===`close-guide`)r=g,A(),Hn(t),window.scrollTo(0,0);else if(h===`start-setup`)D(`profile`);else if(h===`play-music`&&M)v.play(M);else if(h===`stop-music`)v.stop();else if(h===`do-today`&&M)i=e(new Date),c=M,A(),window.scrollTo(0,0);else if(h===`start-workout`){let{selected:e,shown:t}=ve();if(!t)return;let r=C.today(),i=Xe(n.deload,new Date)?`easy`:r?ii(r):null;w.begin(F(t,_e(e.weekdayIndex,t)),i)}else if(h===`finish-workout`){let{shown:e}=ve();if(!e)return;xe(e),D(`today`),T(`Nice work! It's marked done on your calendar.`)}}}}),x.check(),w.resume(),A()}var ua=document.querySelector(`#app`);ua&&la(ua),`serviceWorker`in navigator&&navigator.serviceWorker.register(`./sw.js`).catch(()=>{});